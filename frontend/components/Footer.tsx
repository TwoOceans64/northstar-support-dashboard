export default function Footer() {
  return (
    <footer className="bg-green-600 text-white text-center py-6">
      <div className="space-x-6">
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
        <a href="/terms" className="hover:underline">Terms of Service</a>
        <a href="/contact" className="hover:underline">Contact Us</a>
      </div>
      <p className="mt-4 text-sm">
        © {new Date().getFullYear()} Northstar Retail Co. All rights reserved.
      </p>
    </footer>
  );
}
