'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { Media } from '@/types/media'
import { FaCircleChevronLeft,FaCircleChevronRight } from "react-icons/fa6";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
type Props = {
  data: Media[]
}

const CourseCard = ({ data = [] }: Props) => {
  const media = useMemo(() => {
    return data
      .filter((item) => item.name === 'preview_gallery')
      .map((item) => {
        const isVideo = item.resource_type === 'video'
        return {
          type: isVideo ? 'video' : 'image',
          src: isVideo
            ? `https://www.youtube.com/embed/${item.resource_value}`
            : item.resource_value,
          thumbnail:
            item.thumbnail_url ||
            (item.resource_type === 'image' ? item.resource_value : '/default-thumb.jpg'),
        }
      })
  }, [data])

  const [currentIndex, setCurrentIndex] = useState(0)

  if (media.length === 0) return null

  const currentMedia = media[currentIndex]

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : media.length - 1))
  }

  const goNext = () => {
    setCurrentIndex((prev) => (prev < media.length - 1 ? prev + 1 : 0))
  }

  const selectMedia = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-9 md:top-[60px] md:absolute border border-slate-300 p-2">
      {/* Main preview */}
      <div className="relative h-[230px] bg-black flex items-center justify-center overflow-hidden">
        {currentMedia.type === 'image' ? (
          <Image
            src={currentMedia.src}
            alt="Preview"
            fill
            className="object-cover"
          />
        ) : (
          <iframe
            src={currentMedia.src}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {/* Navigation Buttons */}
        <button
          onClick={goPrev}
          className="absolute left-2 text-white text-2xl shadow"
        >
         <FaCircleChevronLeft/>
        </button>

        {currentMedia.type === 'video' && (
          <div className="absolute center z-10">
            <button className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#fff" fill-opacity="0.5"></circle><circle cx="27.999" cy="28" r="25.415" fill="#fff"></circle><path fill="#1CAB55" d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"></path></svg>
            </button>
          </div>
        )}

        <button
          onClick={goNext}
          className="absolute right-2 text-white text-2xl shadow"
        >
          <FaCircleChevronRight/>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex overflow-x-auto mt-2 gap-2 px-1">
        {media.map((item, idx) => (
          <button
            key={idx}
            onClick={() => selectMedia(idx)}
            className={`flex-shrink-0 border ${
              idx === currentIndex ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <Image
              src={item.thumbnail}
              alt={`Thumb ${idx}`}
              width={75}
              height={40}
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Sticky content */}
      <div className="md:sticky md:top-[112px] mt-4">
        <div className="h-[500px] overflow-y-auto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            similique dolorum voluptatum fuga quos reprehenderit ullam non vero
            perspiciatis error nemo, nisi, quas saepe, consectetur a voluptates
            repellat. Voluptatibus, nobis!
          </p>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
