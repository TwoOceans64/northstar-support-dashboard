"use client";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-6 mt-auto">
      <nav className="space-x-4 mb-4">
        <a href="/contact" className="hover:underline">Contact Us</a>
        <a href="/terms" className="hover:underline">Terms & Conditions</a>
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
      </nav>
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">🌐 Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🌐 Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">🌐 Instagram</a>
      </div>
      <p>© 2026 Northstar Support Dashboard</p>
    </footer>
  );
}

