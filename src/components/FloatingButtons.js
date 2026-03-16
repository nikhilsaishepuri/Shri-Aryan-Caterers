function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3">
      <a
        href="https://wa.me/919999999999"
        className="bg-green-500 text-white p-4 rounded-full"
      >
        WhatsApp
      </a>

      <a
        href="tel:9999999999"
        className="bg-blue-500 text-white p-4 rounded-full"
      >
        Call
      </a>
    </div>
  );
}

export default FloatingButtons;
