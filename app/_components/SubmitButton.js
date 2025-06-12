"use client";

import { useFormStatus } from "react-dom";
import SpinnerMini from "@/app/_components/SpinnerMini";
import toast from "react-hot-toast";

export default function SubmitButton({ children, pendingText, onClick }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? (
        <>
          <span className="flex items-center gap-2">
            {pendingText}
            <SpinnerMini />
          </span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
