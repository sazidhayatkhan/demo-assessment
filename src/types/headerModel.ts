export interface HeaderModel {
    slug: string;
    id: number;
    title: string;
    description: string;
    platform: string;
    type: string;
    modality: string;
    old_info: {
      cat_id: number;
      course_id: number;
      platform: string;
      skills_cat_id: number;
      slug: string;
    };
};

