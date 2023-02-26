module.exports = [
  {
    id: 1,
    device_type: 'mobile',
    comingSoon: false,
    name: 'BookX',
    preview_image_filename: 'BookX_preview_image',
    preview_animation_filename: 'BookX_preview_animation',
    logo_image_filename: 'BookX_logo',
    short_about:
      'BookX is a multi-functional app that functions as a social network, a book club, and a book exchange platform, with the goal of connecting people and promoting a passion for reading.',
    summary: [
      'BookX is a application that can serve as a social network, book club, and book exchange platform, all designed to bring people together and foster a love of reading.',
      'Through BookX, you can engage in discussions about your favorite books, discover new titles, and connect with other book enthusiasts.',
      'One of the unique features of BookX is the book exchange option, which allows users to trade books with people in their local area. This feature not only expands personal libraries but also encourages the reuse and recycling of books.',
      'With BookX, you can access a wealth of book-related content, from reviews to recommendations, and connect with a community of readers who share your passion for books.',
    ],
    roles: [
      'UX Design (Research,',
      'Interaction Design,',
      'Usability Testing)',
      'UI Design',
      'Branding',
      'Wireframing',
      'Prototyping',
    ],
    tools: ['Figma', 'Illustrator', 'Photoshop'],
    duration: ['2021'],
    team: ['Self-Directed, with', 'feedback from the', 'mentor and peers'],
    persons: [
      {
        image_filename: 'BookX_person1',
        name: 'Gina',
        position: 'Student',
        age: '24',
        education: 'University',
        family: 'Parents',
        hometown: 'Tel Aviv',
        about: [
          'Gina always had been a passionate reader.',
          'Eco activist, sorts her trash.',
          'Conciders books as her inspiration and escape.',
          'Chooses to read her next book based on her mood.',
          'Loves to explore and experiment with new books and genres.',
        ],
        goals: [
          'Combination of physical, e-book, and audiobooks to a mixture of genres.',
          'Check out new and old books.',
          'Read multiple books at one time.',
          'Make new friends who read the same books as her.',
        ],
        quote:
          'Reading is very important for me. Whenever I have free time, I sit down with a book to relax.',
        painPoints: [
          'Does not possess money and has to depend on parents.',
          'Environmental impact from production.',
          'Trouble finding the right people to hangout with who are interested in books and literature in the same way as her.',
        ],
      },
      {
        image_filename: 'BookX_person2',
        name: 'Nash',
        position: 'Lawyer',
        age: '45',
        education: 'M.A',
        family: 'Married, 2 kids',
        hometown: 'Chicago',
        about: [
          'Nash has huge love and respect for books hence taking up a career in the same time.',
          'Collecting and reading books are his favourite hobbies.',
          'Pays attention to every small detail.',
          'Likes his books and takes extra care of them.',
          'Spends a lot of his leisure time with his books.',
        ],
        goals: [
          'Read 2-5 books per month.',
          'Discuss and analyse characters, plot and literary aspects of a book.',
          'Collect all kinds of books and expand his personal library.',
          'Only reads one book at a time.',
        ],
        quote:
          'I mostly choose books based on what is new, coworker suggestions, or articles I see on the Internet.',
        painPoints: [
          'Does not want to throw away the read book but also has no space to store them.',
          'No time for searching “used books” store.',
          'Hard to exchange a book.',
          'Problem with finding with whom to exchange.',
        ],
      },
    ],
    problem: [
      'The debate over physical books versus electronic books presents a problem for readers who are struggling to decide which format is right for them. Physical books require space and can be costly, while electronic books may lack the tactile experience that some readers enjoy.',
      'This leaves many readers feeling conflicted about which option to choose, and unsure about how to reconcile the benefits and drawbacks of each format. Ultimately, this problem highlights the need for individuals to carefully consider their own needs and preferences when making a decision about which format to choose.',
    ],
    solution: [
      'Moreover, exchanging books with others can introduce you to new titles and authors that you might not have discovered otherwise. By sharing your own favorite books with others and receiving recommendations in return, you can broaden your literary horizons and gain new perspectives on the world.',
      'Buying used books from local secondhand stores or online marketplaces can also be an eco-friendly option, as it reduces the environmental impact of producing new books. In addition, supporting small, independent bookstores and sellers can help to build a sense of community and sustain local economies.',
      "Overall, connecting with other readers and buying used books can be a win-win situation for both your wallet and the environment. So next time you're looking for a new read, consider exploring these options to discover a world of new books and fellow bookworms!",
    ],
    main_features: [
      'Here are some additional ways to connect with other readers and exchange or discover new books:',
      'Attend book festivals or author events in your area.',
      'Participate in online book clubs or discussion forums.',
      'Host a book exchange party with friends or neighbors.',
      'Use social media platforms to connect with other book lovers and exchange book recommendations.',
      'Take advantage of library lending programs or book swaps in your community.',
      'Explore book subscription services that provide a curated selection of books based on your interests.',
      'Share your own book reviews and recommendations on websites like Goodreads or Amazon.',
      "Whether you prefer to connect with other readers in person or online, there are many ways to expand your literary circle and find new books to enjoy. So don't be afraid to reach out and start a conversation with other book lovers – you never know what you might discover!",
    ],
    wireframes: [
      'BookX_wireframe1',
      'BookX_wireframe2',
      'BookX_wireframe3',
      'BookX_wireframe4',
    ],
    user_flow: [
      "Furthermore, tracking the user flow not only helps to ensure that the user's goals are met, but it can also provide valuable insights into user behavior and preferences. By analyzing the flow of actions taken by users, it is possible to identify patterns and pain points in the user journey, and make improvements to the overall user experience.",
      'In addition, the ease and simplicity of the user flow for buying or exchanging used books can help to encourage more people to adopt sustainable and eco-friendly practices when it comes to reading. By making it easy and accessible to connect with other book lovers and exchange books, we can reduce waste and promote a culture of sharing and reuse.',
      'Overall, creating a well-designed user flow for buying or exchanging used books can benefit both the user and the environment. By streamlining the process and making it easy to use, we can encourage more people to get involved in book swapping and support sustainable reading practices.',
    ],
    fonts: ['Roboto'],
    color_palette: ['#3CB27B', '#4F008C', '#FFFFFF', '#000000', '#ACB1B6'],
    icons: {
      container_styles: {
        display: 'flex',
        gap: '1rem',
        flexFlow: 'row wrap',
        width: '100%',
        marginBlockEnd: 50,
      },
      icon_picture_common_styles: {
        width: 'calc((100% - 4rem) / 5)',
      },
      icon_image_common_styles: {
        width: '100%',
      },
      icons: [
        {
          filename: 'BookX_icon_01',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'BookX_icon_02',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'BookX_icon_03',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'BookX_icon_04',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'BookX_icon_05',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'BookX_icon_06',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'BookX_icon_07',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'BookX_icon_08',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'BookX_icon_09',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'BookX_icon_10',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
      ],
    },
    button_icons: {
      container_styles: {
        display: 'flex',
        flexFlow: 'row wrap',
        width: '100%',
        marginBlockEnd: 50,
      },
      icon_picture_common_styles: {
        width: 'calc((100% - 110px) / 6)',
        marginBlockEnd: 10,
      },
      icon_image_common_styles: {
        width: '100%',
      },
      icons: [
        {
          filename: 'BookX_button_icon_01',
          icon_picture_styles: {
            marginInlineEnd: 10,
          },
          icon_image_styles: {},
        },
        {
          filename: 'BookX_button_icon_02',
          icon_picture_styles: {
            marginInlineEnd: 40,
          },
          icon_image_styles: {},
        },
        {
          filename: 'BookX_button_icon_03',
          icon_picture_styles: {
            marginInlineEnd: 10,
          },
          icon_image_styles: {},
        },
        {
          filename: 'BookX_button_icon_04',
          icon_picture_styles: {
            marginInlineEnd: 40,
          },
          icon_image_styles: {},
        },
        {
          filename: 'BookX_button_icon_05',
          icon_picture_styles: {
            marginInlineEnd: 10,
          },
          icon_image_styles: {},
        },
        {
          filename: 'BookX_button_icon_06',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'BookX_button_icon_07',
          icon_picture_styles: {
            marginInlineEnd: 10,
          },
          icon_image_styles: {},
        },
        {
          filename: 'BookX_button_icon_08',
          icon_picture_styles: {
            marginInlineEnd: 40,
          },
          icon_image_styles: {},
        },
        {
          filename: 'BookX_button_icon_09',
          icon_picture_styles: {
            marginInlineEnd: 10,
          },
          icon_image_styles: {},
        },
        {
          filename: 'BookX_button_icon_10',
          icon_picture_styles: {
            marginInlineEnd: 40,
          },
          icon_image_styles: {},
        },
        {
          filename: 'BookX_button_icon_11',
          icon_picture_styles: {
            marginInlineEnd: 10,
          },
          icon_image_styles: {},
        },
        {
          filename: 'BookX_button_icon_12',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'BookX_button_icon_13',
          icon_picture_styles: {
            marginInlineEnd: 10,
          },
          icon_image_styles: {},
        },
        {
          filename: 'BookX_button_icon_14',
          icon_picture_styles: {
            marginInlineEnd: 40,
          },
          icon_image_styles: {},
        },
      ],
    },
    screens: [
      {
        name: 'Sign up screen',
        description: [
          'With social media sign-up, users can save time and effort by logging in with their existing accounts and avoiding the need to remember yet another set of login details.',
          'Alternatively, traditional registration provides a more familiar experience for users who may prefer to sign up with their email address and a unique password.',
        ],
        img_filename: 'BookX_signup_screen',
      },
      {
        name: 'Home screen',
        description: [
          "Our platform also offers features that help users stay up-to-date with the latest additions to our book exchange community. Users can opt in to receive notifications when a book they have been looking for becomes available, ensuring they don't miss out on the opportunity to acquire the book they want.",
          'Furthermore, our platform provides a "Recently Added" section that allows users to see the latest books that have been added to the exchange, giving them the chance to discover new titles and authors they may be interested in. By staying connected and informed, users can make the most of our book exchange community and find the books they love.',
        ],
        img_filename: 'BookX_home_screen',
      },
      {
        name: 'Bookshelf - Wishlist tab',
        description: [
          'In addition, having a wishlist can also help you budget your book purchases. Rather than impulsively buying every book that catches your eye, you can add it to your wishlist and prioritize which ones you want to buy first. This can help you save money and make more intentional choices about your book purchases.',
          'Furthermore, wishlists can be a great way to keep track of books you want to recommend to others. When a friend asks for a book recommendation, you can easily pull up your wishlist and suggest some titles you think they would enjoy.',
        ],
        img_filename: 'BookX_bookshelf_screen',
      },
      {
        name: 'Adding a book',
        description: [
          'You have three options:',
          [
            'Budget management: Prioritize which books you want to buy first and avoid overspending.',
            'Discover new books: Use your wishlist to browse recommendations from friends or similar readers.',
            'Simplify book buying: Scan barcodes or use search engines to add books to your wishlist.',
            'Quick recommendations: Share your wishlist with friends to easily suggest books they might enjoy.',
          ],
        ],
        img_filename: 'BookX_add_book_screen',
      },
      {
        name: 'Book screen',
        description: [
          'BookX provides a dedicated page for each book that features comprehensive details about the book, including its author, publisher, publication date, and more. In addition to this information, there is also a short excerpt from the book included on the page, allowing readers to get a taste of the writing style and content before committing to reading the entire work.',
        ],
        img_filename: 'BookX_book_screen',
      },
      {
        name: 'Following screen',
        description: [
          'Users on BookX can follow others with similar book tastes and interests, allowing them to see updates and recommendations from those they follow. This social aspect of the app encourages users to connect with others and discover new books that they might not have found otherwise.',
        ],
        img_filename: 'BookX_following_screen',
      },
      {
        name: 'Notifications',
        description: [],
        img_filename: 'BookX_notifications_screen',
      },
      {
        name: "Book giver's page",
        description: [
          "On each book's dedicated page, users can also view details about the book giver, including their profile information and any additional books they may be giving away. This feature is designed to promote book sharing and exchange among users, creating a vibrant community of book lovers who can connect with each other and share their favorite works.",
        ],
        img_filename: 'BookX_book_giver_screen',
      },
    ],
    final_prototype: {
      src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fse7JR93jBnQvSH2pN7JCos%2FUntitled%3Fpage-id%3D0%253A1%26node-id%3D15%253A1058%26viewport%3D473%252C346%252C0.14%26scaling%3Dscale-down%26starting-point-node-id%3D15%253A1058',
      device_type: 'mobile',
    },
  },
  {
    id: 2,
    device_type: 'desktop',
    comingSoon: false,
    name: 'Recycle Conference',
    preview_image_filename: 'ReCon_preview_image',
    preview_animation_filename: 'ReCon_preview_animation',
    logo_image_filename: 'ReCon_logo',
    short_about:
      'A responsive website for the upcoming conference, which will ensure that attendees can easily access important information from any device.',
    summary: [
      'This landing page is for Eco conference. It contains: agenda, conference details( as date, time and place), list of speakers(with short explanation who they are), schedule, prices, list of sponsors.',
      'Also it has some last news from eco field and pictures from previous conferences.',
    ],
    roles: ['UI Design', 'Branding', 'Wireframing', 'Prototyping'],
    tools: ['Figma', 'Illustrator', 'Photoshop'],
    duration: ['2021'],
    team: ['Self-Directed, with', 'feedback from the', 'mentor and peers'],
    problem: [],
    solution: [],
    main_features: [],
    wireframes: [],
    fonts: ['Barlow'],
    color_palette: ['#26264B', '#03A01B', '#FFFFFF', '#000000'],
    icons: {
      container_styles: {
        display: 'flex',
        gap: '1rem',
        flexFlow: 'row wrap',
        width: 300,
        marginBlock: 50,
        marginInline: 'auto',
      },
      icon_picture_common_styles: {
        width: 'calc((100% - 2rem) / 3)',
      },
      icon_image_common_styles: {
        width: '100%',
      },
      icons: [
        {
          filename: 'ReCon_icon_01',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'ReCon_icon_02',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'ReCon_icon_03',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'ReCon_icon_04',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'ReCon_icon_05',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
        {
          filename: 'ReCon_icon_06',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
      ],
    },
    button_icons: {
      container_styles: {
        width: 300,
      },
      icon_picture_common_styles: {
        width: '100%',
      },
      icon_image_common_styles: {
        width: '100%',
      },
      icons: [
        {
          filename: 'ReCon_button_icon_01',
          icon_picture_styles: {},
          icon_image_styles: {},
        },
      ],
    },
    screens: [
      {
        name: 'Registration',
        description: ['Easy ticket booking and registration.'],
        img_filename: 'ReCon_registration_screen',
      },
      {
        name: 'Agenda',
        description: ['Description of the conference and its details.'],
        img_filename: 'ReCon_agenda_screen',
      },
      {
        name: 'Speakers',
        description: ['Some important details about attending speakers.'],
        img_filename: 'ReCon_speakers_screen',
      },
      {
        name: 'Ticket plan',
        description: [
          'Participant can choose the price and attendence that suits him.',
        ],
        img_filename: 'ReCon_ticket_plan_screen',
      },
      {
        name: 'Sponsors',
        description: [
          'List of all sponsors divided depending on on their contribution in the conference',
        ],
        img_filename: 'ReCon_sponsors_screen',
      },
      {
        name: 'Latest news',
        description: ['Latest news and updates from Eco world.'],
        img_filename: 'ReCon_latest_news_screen',
      },
      {
        name: 'Photo gallery',
        description: ['Photos from previous years'],
        img_filename: 'ReCon_photo_gallery_screen',
      },
      {
        name: 'Place details',
        description: [
          'Map and conference details including phone, address and email',
        ],
        img_filename: 'ReCon_place_details_screen',
      },
    ],
    final_prototype: {
      src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fi0hclST61ruN69Q6SB0Jnj%2FReConference-Landing-Page%3Fpage-id%3D0%253A1%26node-id%3D0%253A2%26viewport%3D470%252C45%252C0.12%26scaling%3Dscale-down',
      device_type: 'desktop',
    },
  },
  {
    id: 3,
    device_type: 'desktop',
    comingSoon: false,
    name: 'Crocoin',
    preview_image_filename: 'Crocoin_preview_image',
    // preview_animation_filename: 'Crocoin_preview_animation',
    logo_image_filename: 'Crocoin_logo',
    short_about:
      'A trading website is an online platform that facilitates the buying and selling of financial securities, such as stocks, bonds, options, and futures, among others. This websites offer investors and traders access to real-time market data, research tools, and trading resources, enabling them to make informed investment decisions and execute trades quickly and efficiently.',
    summary: [],
    roles: [],
    tools: [],
    duration: [],
    team: [],
    problem: [],
    solution: [],
    main_features: [],
    wireframes: [],
    fonts: [],
    color_palette: [],
    icons: {
      container_styles: {},
      icon_picture_styles: {},
      icon_image_styles: {},
      icons: [],
    },
    button_icons: {
      container_styles: {},
      icon_picture_common_styles: {},
      icon_image_common_styles: {},
      icons: [],
    },
    screens: [],
    final_prototype: {
      src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8jTnR5UoBdBjuovsZJDnNt%2FDesktop%3Fpage-id%3D0%253A1%26node-id%3D927%253A8975%26viewport%3D1306%252C443%252C0.18%26scaling%3Dscale-down%26starting-point-node-id%3D927%253A8975',
      device_type: 'desktop',
    },
  },
  {
    id: 4,
    device_type: 'mobile',
    comingSoon: false,
    name: 'Sapori',
    preview_image_filename: 'Sapori_preview_image',
    // preview_animation_filename: 'Sapori_preview_animation',
    logo_image_filename: 'Sapori_logo',
    short_about:
      "Mobile app for your favorite Italian restaurant! With just a few taps, you can now customize your true Italian pizza, pasta, salad, desserts, and drinks to your heart's content.",
    summary: [],
    roles: [],
    team: [],
    tools: [],
    duration: [],
    problem: [],
    solution: [],
    main_features: [],
    wireframes: [],
    fonts: [],
    color_palette: [],
    icons: {
      container_styles: {},
      icon_picture_styles: {},
      icon_image_styles: {},
      icons: [],
    },
    button_icons: {
      container_styles: {},
      icon_picture_common_styles: {},
      icon_image_common_styles: {},
      icons: [],
    },
    screens: [],
    final_prototype: {
      src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWh9OQHPZEzxmqG1NttVi0v%2FItalian-restaurant%3Fpage-id%3D0%253A1%26node-id%3D208%253A3867%26viewport%3D867%252C871%252C0.11%26scaling%3Dscale-down%26starting-point-node-id%3D208%253A3867',
      device_type: 'mobile',
    },
  },
];
