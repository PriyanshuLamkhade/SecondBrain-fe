import { useRef } from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import { Input } from "./InputsComponent";
import { Button } from "./ui/Button";
import axios from 'axios';
import { BACKEND_URL } from "../config";

interface PopUp {
  open: boolean;
  onClose: () => void;
  onContentAdded?: (newContent: any) => void;  // Accept a callback to notify parent
}

export function CreateContentModal({ open, onClose, onContentAdded }: PopUp) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLInputElement>(null);

  async function addContent() {
    const title = titleRef.current?.value;
    const links = linkRef.current?.value;
    const types = typeRef.current?.value;

    try {
      // Make API call to add content
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        { title, links, types },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      // Notify the parent that new content has been added
      if (onContentAdded && response.data) {
        onContentAdded(response.data); // Pass the newly created content to the parent
      }

      // Close the modal after submitting
      onClose();
    } catch (error) {
      console.error("Error adding content:", error);
      // You could display an error message to the user here if needed
    }
  }

  return (
    <div>
      {open && (
        <div className="z-10 flex items-center justify-center opacity-95 fixed left-0 right-0 w-full h-full bg-slate-300">
          <div>
            <div className="bg-white p-4 rounded-md">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon size="md" />
                </div>
              </div>
              <div>
                <Input reference={titleRef} placeholder={"Title"} />
                <Input reference={linkRef} placeholder={"Link"} />
                <Input reference={typeRef} placeholder={"youtube/tweet/reddit/other"} />
              </div>
              <div className="flex justify-center">
                <Button onClick={addContent} varient="primary" size="md" text="Submit" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
