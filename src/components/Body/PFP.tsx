import me from "/home/htown/Code/me-crop.png";

const PFP = () => {
  return (
    <div class="w-2/5 border-2 h-full">
      <img src={me} class="p-12 rounded-full" />
      <div
        class="text-center mb-8"
        style="font-size: clamp(0.05rem, 2.2vw, 2rem);"
      >
        I'm Hannah Eichinger!
      </div>
    </div>
  );
};

export default PFP;

// "~/..." doesn't work
