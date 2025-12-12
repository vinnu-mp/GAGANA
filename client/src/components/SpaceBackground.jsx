export default function SpaceBackground() {
  return (
    <div className="absolute inset-0 bg-[url('/spacebg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
    </div>
  );
}
