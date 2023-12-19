const randomInterval = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const CoinsVariants = [
  {
    initial: {
      scale: 0,
      y: 100,
    },
    animate: {
      scale: 1,
      y: [0, -6, 0],
      transition: {
        y: {
          repeat: Infinity,
          ease: 'easeOut',
          duration: randomInterval(1, 2),
        },
        scale: {
          delay: 1,
        },
      },
      duration: 1,
    },
  },
  {
    initial: {
      scale: 0,
      y: 100,
    },
    animate: {
      scale: 1,
      y: [0, -6, 0],
      transition: {
        y: {
          repeat: Infinity,
          ease: 'easeOut',
          duration: randomInterval(1, 2),
        },
        scale: {
          delay: 1,
        },
      },
      duration: 1,
    },
  },
  {
    initial: {
      scale: 0,
      y: 100,
    },
    animate: {
      scale: 1,
      y: [0, -6, 0],
      transition: {
        y: {
          repeat: Infinity,
          ease: 'easeOut',
          duration: randomInterval(1, 2),
        },
        scale: {
          delay: 1,
        },
      },
      duration: 1,
    },
  },
];
