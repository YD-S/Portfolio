import TimelineContent from "./TimelineContent.jsx";
import { TimelineContentData } from "../../Data/TimelineContentData.jsx";

export default function JointTimelineContent() {
    return (
        <>
            {TimelineContentData.map((element, index) => (
                <TimelineContent key={index} id={element.id} year={element.year}>
                    {element.children}
                </TimelineContent>
            ))}
        </>
    );
}