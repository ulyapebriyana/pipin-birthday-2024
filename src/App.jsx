import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

function App() {
  const [lamp, setLamp] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (lamp) {
      setTimeout(() => {
        setContentVisible(true);
      }, 500);
    } else {
      setContentVisible(false);
    }
  }, [lamp]);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setAudioPlaying(true);
    }
  };

  return (
    <>
      <div
        className={`h-screen w-full transition-all duration-1000 ${
          lamp ? "bg-pink-200" : "bg-black"
        }`}
      >
        {lamp ? (
          <div className="flex items-center justify-around h-screen relative">
            {/* Gambar dengan Framer Motion */}
            <motion.img
              src="/sayang.webp"
              alt="sayangku.jpg"
              className="rounded-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Ucapan dengan Framer Motion */}
            <motion.div
              className="w-[500px] text-center p-6 bg-pink-100 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <p className="text-3xl font-bold text-red-600 mb-4">
                Selamat Ulang Tahun, Cintakuuu{" "}
                <span className="text-purple-500">Lutvy Sugesti! 🎉❤️</span>
              </p>
              <p className="text-xl leading-relaxed text-gray-700">
                Di hari spesial sayangku iniii, aku mau ungkapin betapa
                beruntungnya aku memiliki seseorang{" "}
                <span className="font-semibold text-purple-600">
                  seistimewa
                </span>{" "}
                kamu dalam hidupkuuuu. Makasih ya pipinnn untuk setiap{" "}
                <span className="font-semibold text-pink-600">
                  tawa, kebahagiaan,
                </span>{" "}
                dan cinta yang pipin berikan.
              </p>
              <p className="text-xl leading-relaxed text-gray-700 mt-4">
                Semoga setiap harapan dan impian pipin tercapai, dan kita selalu
                bisa berbagi
                <span className="font-semibold text-purple-600">
                  {" "}
                  kebahagiaan
                </span>{" "}
                bersama. Aku akan selalu ada untuk pipin, mendukung pipin, dan{" "}
                <span className="font-semibold text-pink-600">
                  mencintai
                </span>{" "}
                pipin tanpa batas.
              </p>
              <p className="text-xl leading-relaxed text-gray-700 mt-4">
                Semoga hari ini seindah dirimu, dan aku berharap kita bisa terus
                berjalan
                <span className="font-semibold text-pink-600">
                  {" "}
                  berdua
                </span>{" "}
                melalui setiap babak kehidupan.
                <span className="font-bold text-purple-600">
                  {" "}
                  I love youuuu, selalu dan selamanyaaaaa. 💕🎂
                </span>
              </p>
            </motion.div>

            {/* Audio */}
            <audio
              ref={audioRef}
              src="/Happy_birthday_to_you_MIDI(chosic.com).mp3"
            />

            {!audioPlaying && (
              <motion.button
                onClick={handlePlayAudio}
                className="bottom-0 absolute z-20 mt-4 p-4 animate-bounce bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-700 transition-colors ease-in-out"
                whileHover={{ scale: 1.1 }}
              >
                Play
              </motion.button>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <div
              onClick={() => setLamp(!lamp)}
              className="p-2 bg-pink-500 rounded-lg cursor-pointer hover:bg-pink-800 hover:text-white transition-colors ease-in-out"
            >
              Piinn Idupin Lampunyaa...
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
