"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";
import { X } from "lucide-react";

const CloseModal = () => {
  const router = useRouter();

  return (
    <Button
      variant="subtle"
      className="h-6 w-6 rounded-md"
      aria-label="close modal"
      onClick={() => router.back()}
    >
      X{/* <X className="h-4 w-4 border-black" /> */}
    </Button>
  );
};

export default CloseModal;
