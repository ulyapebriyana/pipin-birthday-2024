import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import StarrySky from "./StarrySky"; // Komponen untuk langit berbintang

const loveNotes = [
  {
    note: "Pipin ngangeniin, ngga pernah kedinginan kalo sama pipinn walopun keujanan 😘",
    image: "/image1.webp",
  },
  {
    note: "Pertama kali main jauh sama pipin ❤️",
    image: "/image2.webp",
  },
  {
    note: "Mau suunnn, pipin aku sayang bangeeeettttt 💖",
    image: "/image3.webp",
  },
  {
    note: "Kenangan sama pipin is the best moment. 🥰",
    image: "/image4.webp",
  },
  {
    note: "Pipin aku cinta bangeettt.....kamu juga cinta aku kaann sayaaannngggg.",
    image: "/image5.webp",
  },
  {
    note: "Semoga semua keinginan pipin tercapaaii dan kita bahagia terus ber duaa. 🥰",
    image: "/image6.webp",
  },
  {
    note: "muah muah muahhh.,,, maafin aku ya pipiiinn atas kesalahan kesalahankuuu,,, aku janji ngga akan ngulangi lagi aku seriuuss bener bener cinta kamuu, aku ngga mau nyakitin pipin 🥰",
    image: "/image7.webp",
  },
  {
    note: "Makasih ya sayang atas cinta dan kasih yang kamu berikan, aku sangat sangat mencintaimu🥰",
    image: "/image8.webp",
  },
];

function App() {
  const [lamp, setLamp] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState("");
  const audioRef = useRef(null);
  const { width, height } = useWindowSize();

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

  const openModal = (note) => {
    setSelectedNote(note);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className={`h-screen w-full transition-all duration-1000 ${
          lamp ? "bg-pink-900" : "bg-black"
        }`}
      >
        {lamp ? (
          <>
            {/* Confetti Burst */}
            <Confetti
              width={width}
              height={height}
              recycle={false}
              numberOfPieces={500}
            />
            {/* Starry Sky Animation */}
            <StarrySky /> {/* Komponen Langit Berbintang */}
            <div className="flex md:flex-row flex-col items-center justify-around h-screen relative gap-3">
              <motion.img
                src="/pipin-stroberi.webp"
                alt="sayangku.jpg"
                className="rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              />

              <motion.div
                className="max-w-[500px] text-center p-6 bg-pink-100 rounded-xl shadow-lg relative"
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
                  Semoga setiap harapan dan impian pipin tercapai, dan kita
                  selalu bisa berbagi
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
                  Semoga hari ini seindah dirimu, dan aku berharap kita bisa
                  terus berjalan
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

                {/* Glowing Heart Animation */}
                <motion.div
                  className="absolute top-[-20px] right-[-20px] text-pink-600"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                    filter: [
                      "drop-shadow(0px 0px 10px #ff007f)",
                      "drop-shadow(0px 0px 20px #ff007f)",
                      "drop-shadow(0px 0px 10px #ff007f)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon icon="mdi:heart" className="text-6xl" />
                </motion.div>
              </motion.div>

              {/* Floating Love Notes */}
              {loveNotes.map((note, index) => (
                <motion.div
                  key={index}
                  className="absolute cursor-pointer p-2 bg-white text-pink-600 rounded-lg shadow-lg"
                  style={{
                    top: `${Math.random() * 80}%`,
                    left: `${Math.random() * 80}%`,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  onClick={() => openModal(note)}
                  whileHover={{ scale: 1.2 }}
                >
                  💌
                </motion.div>
              ))}

              {/* Modal */}
              {modalOpen && (
                <motion.div
                  className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[400px] flex flex-col items-center justify-center">
                    <div className="">
                      <motion.img
                        src={selectedNote.image}
                        alt="selected-image"
                        className="w-72 h-72 rounded-full mb-4"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <p className="text-xl text-pink-600">{selectedNote.note}</p>
                    <button
                      onClick={closeModal}
                      className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}

              <audio
                ref={audioRef}
                src="/Happy_birthday_to_you_MIDI(chosic.com).mp3"
              />

              {!audioPlaying && (
                <motion.button
                  onClick={handlePlayAudio}
                  className="bottom-0 sticky md:absolute z-20 mt-4 p-2 animate-bounce bg-pink-500 text-white rounded-full cursor-pointer hover:bg-pink-700 transition-colors ease-in-out"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon
                    icon="line-md:pause-to-play-filled-transition"
                    className="text-5xl"
                  />
                </motion.button>
              )}
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <div
              onClick={() => setLamp(!lamp)}
              className="p-2 bg-pink-500 rounded-lg cursor-pointer hover:bg-pink-800 hover:text-white transition-colors"
            >
              <Icon icon="mdi:lightbulb-on" className="text-5xl" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
