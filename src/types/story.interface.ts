export interface IStory {
    data: [
        length : number
    ]
    id: number
    description: string;
    death_date: string;
    created_at: string;
    story_title: string;
    total : number;
    story : {
        story_title: string;
        description: string
    };
    stories :{
        current_page: number;
    }
}
  