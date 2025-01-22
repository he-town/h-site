const PFP = () => {
  return (
    <div class=" border-2 h-full rounded-lg font-average_sans w-2/5">
      <img
        src={
          "https://media.discordapp.net/attachments/993253169268260876/1331687552872222851/me-crop.png?ex=6792862e&is=679134ae&hm=a9676ebe4d98b510f27e00299389925d3da5195a76cdf56913067a3d3eed2f45&=&format=webp&quality=lossless&width=862&height=862"
        }
        class="p-12 rounded-full"
      />
      <div
        class="text-center mb-8"
        style="font-size: clamp(0.05rem, 2.7vw, 2rem);"
      >
        I'm Hannah Eichinger!
      </div>
    </div>
  );
};

export default PFP;

// "~/..." doesn't work
