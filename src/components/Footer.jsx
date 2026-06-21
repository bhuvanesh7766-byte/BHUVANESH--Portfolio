export default function Footer() {
  return (
    <footer className="text-center py-8 bg-neutral-100 border-t border-neutral-200">
      <p className="text-neutral-500 text-sm font-medium tracking-wide">
        © {new Date().getFullYear()} Bhuvanesh Selvaraj. All rights reserved.
      </p>
    </footer>
  );
}
