import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8657488888888"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="text-sm font-medium hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
