import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Go back home
      </Link>
    </div>
  );
}
