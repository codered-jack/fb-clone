import StoryCard from "./StoryCard";

const stories=[
    {
        name:"Sumit Kumar",
        src:"https://i.ibb.co/LPLZnQ0/Whats-App-Image-2021-05-18-at-12-42-28.jpg",
        profile:"https://i.ibb.co/vmXP5JY/Whats-App-Image-2021-05-18-at-12-50-30.jpg" 
    },
    {
        name:"Elon Musk",
        src:"https://links.papareact.com/4zn",
        profile:"https://links.papareact.com/kxk" 
    },
    {
        name:"Jeff Bezoz",
        src:"https://links.papareact.com/k2j",
        profile:"https://links.papareact.com/f0p" 
    },
    {
        name:"Mark Zuckerberg",
        src:"https://links.papareact.com/xql",
        profile:"https://links.papareact.com/snf" 
    },
    {
        name:"Bill Gates",
        src:"https://links.papareact.com/4u4",
        profile:"https://links.papareact.com/zvy" 
    }
];

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story=>(
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}/>
            ))}
        </div>
    )
}

export default Stories
