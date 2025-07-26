export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: SectionValue[];
}

export type SectionValue =
  | OfferValue
  | InstructorValue
  | FeatureValue
  | GroupJoinValue
  | PointerValue
  | FeatureExplanationValue
  | AboutValue
  | FaqValue
  | any;

export interface OfferValue {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  id: string;
  start_at: string;
  template: string;
  text: string;
}

export interface InstructorValue {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

export interface FeatureValue {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

export interface GroupJoinValue {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

export interface PointerValue {
  color: string;
  icon: string;
  id: string;
  text: string;
}

export interface FeatureExplanationValue {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

export interface AboutValue{
  icon:string;
  id:string;
  description:string;
  title:string;

}

export interface FaqValue {
  answer: string;
  id: string;
  question: string;
}