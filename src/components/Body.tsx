import { useState, useEffect } from "react";
import { PlusIcon } from "../Icons/PlusIcon";
import { ShareIcon } from "../Icons/ShareIcon";
import { CreateContentModal } from "./CreateContentModal";

import { Button } from "./ui/Button";
import { Card } from "./ui/Card"; // ✅ Your custom Card component
import { useContent } from "../hooks/useContent";

export const Body = (props:any) => {
    const [modalOpen, setModalOpen] = useState(false);

    console.log("type"+props.typeContent)

    const contents = useContent(props.typeContent);

    // Optional debug log
    useEffect(() => {
        console.log("Fetched contents:", contents);
    }, [contents]);

    return (
        <div>
            <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />

            <div id="topPart" className="flex justify-between flex-wrap items-center p-8 space-y-5">
                <p className="text-3xl font-bold">All Notes</p>
                <div className="flex gap-3 flex-wrap">
                    <Button
                        startIcon={<ShareIcon size="md" />}
                        text="Share Brain"
                        varient="secondary"
                        size="md"
                    />
                    <Button
                        onClick={() => setModalOpen(true)}
                        startIcon={<PlusIcon size="md" />}
                        text="Add Content"
                        varient="primary"
                        size="md"
                    />
                </div>
            </div>

            <div id="bottomPart" className="flex flex-wrap gap-x-10 ml-8 md:ml-14 ">
                    {contents && contents.length > 0 ? (
                        contents.map(({ types, title, links,_id }, index) => (
                            <Card contentId={_id} key={index} type={types} title={title} link={links} />
                        ))
                    ) : (
                        <p className="text-gray-400">No content found or loading...</p>
                    )}
            </div>
        </div>
    );
};
