export interface IStory {
    data: [
        length : number
    ]
    id: number
    description: string;
    death_date: string;
    total : number;
    story : {
        story_title: string;
    };
    stories :{
        current_page: number;
    }
}
  