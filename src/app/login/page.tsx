import { LoginForm } from "@/components/login-form";
import { GalleryVerticalEnd } from "lucide-react";

export default function Login() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-slate-100 p-6 dark:bg-slate-800 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6 mt-[64px]">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900">
            <GalleryVerticalEnd className="size-4" />
          </div>
          ASA Indonesia.
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
