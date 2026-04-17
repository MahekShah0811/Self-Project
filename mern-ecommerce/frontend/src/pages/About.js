const About = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* 🔥 INTRO */}
      <div className="text-center py-10 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600">
          We are building a modern eCommerce platform focused on quality,
          trust, and a seamless shopping experience.
        </p>
      </div>

      {/* 📖 OUR STORY */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="story"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              MyShop started as a small idea to simplify online shopping.
              Over time, it has grown into a platform that focuses on quality,
              affordability, and customer satisfaction.
            </p>
          </div>

        </div>
      </div>

      {/* 🎯 OUR MISSION */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to deliver high-quality products at affordable prices
              while ensuring a fast, secure, and enjoyable shopping experience.
              We aim to make online shopping simple and accessible for everyone.
            </p>
          </div>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
            alt="mission"
            className="rounded-2xl shadow-lg"
          />

        </div>
      </div>

      {/* 💡 WHY US */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Trusted Platform",
                img: "https://img.icons8.com/fluency/96/trust.png"
              },
              {
                title: "Secure Payments",
                img: "https://img.icons8.com/fluency/96/lock.png"
              },
              {
                title: "Fast Delivery",
                img: "https://img.icons8.com/fluency/96/delivery.png"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:scale-105 transition"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="font-semibold">{item.title}</h3>
              </div>
            ))}

          </div>
        </div>
      </div>

     {/* 👥 OUR TEAM */}
      <div className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Team</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
              {
                name: "Lee Martin",
                role: "Founder & CEO",
                desc: "Lee leads MyShop with a vision to simplify online shopping. With strong expertise in full-stack development, he focuses on building scalable and user-friendly platforms that deliver real value to customers.",
                img: "https://i.pinimg.com/736x/4a/9b/b9/4a9bb9b074fe23f79ee7e111e6f6f609.jpg"
              },
              {
                name: "Albert Lewis",
                role: "Full Stack Developer",
                desc: "Albert specializes in the MERN stack and is responsible for building robust backend systems and seamless frontend experiences. He ensures performance, security, and reliability across the platform.",
                img: "https://i.pinimg.com/736x/45/a9/ba/45a9babd46c793340db1d4ff7220e622.jpg"
              },
              {
                name: "Aemi Jackson",
                role: "UI/UX Designer",
                desc: "Aemi designs intuitive and visually appealing interfaces. Her focus is on creating smooth user journeys and modern layouts that enhance customer satisfaction and engagement.",
                img: "https://i.pinimg.com/170x/f2/d0/bb/f2d0bb2dd3642588c30075cbbbda6251.jpg"
              }
            ].map((member, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center"
            >

              {/* Image */}
              <img
                src={member.img}
                alt=""
                className="w-80 h-80 mx-auto rounded-2xl mb-4 border-4 border-gray-300"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold">{member.name}</h3>

              {/* Role */}
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>

              {/* Description */}
              <p className="text-gray-600 text-sm">{member.desc}</p>

            </div>
          ))}

        </div>
      </div>

      {/* 💬 CUSTOMER REVIEWS */}
      <div className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Customer Reviews</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
              {
                name: "Rohan Mehta",
                review: "Absolutely loved the shopping experience! The website is smooth, products are high quality, and delivery was faster than expected. Will definitely shop again.",
                img: "https://i.pravatar.cc/150?img=12",
                rating: 5
              },
              {
                name: "Priya Sharma",
                review: "Great platform with affordable prices. The UI is very clean and easy to use. Customer support was also very helpful when I had a query.",
                img: "https://i.pravatar.cc/150?img=32",
                rating: 4
              },
              {
                name: "Amit Verma",
                review: "Impressive service and fast delivery. The product quality exceeded my expectations. Highly recommended for online shopping.",
                img: "https://i.pravatar.cc/150?img=45",
                rating: 5
              }
            ].map((user, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow text-left">

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={user.img}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{user.name}</h4>

                  <div className="text-yellow-400 text-sm">
                    {"★".repeat(user.rating)}
                    {"☆".repeat(5 - user.rating)}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                "{user.review}"
              </p>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default About;