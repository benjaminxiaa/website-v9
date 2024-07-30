enum Section {
  BigSur = 'BigSur',
  DeathValley = 'DeathValley',
  HakoneGardens = 'HakoneGardens',
  NewMexico = 'NewMexico'
}

const image = (section: Section, imagePath: String) => {
  try {
    return require(`../portfolio/${section}/${imagePath}`);
  } catch (err) { }
}

export const bigSur = [
  {
    src: image(Section.BigSur, 'DSC04509.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: image(Section.BigSur, 'DSC04582.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: image(Section.BigSur, 'DSC04608.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: image(Section.BigSur, 'DSC04663.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: image(Section.BigSur, 'DSC04679.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: image(Section.BigSur, 'DSC04875.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: image(Section.BigSur, 'DSC04893.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: image(Section.BigSur, 'DSC04930.jpg'),
    width: 2048,
    height: 1365
  },
];
export const deathValley = [
  {
    src: image(Section.DeathValley, 'b_4132686_autumn_maple.jpg'),
    width: 751,
    height: 500
  },
  {
    src: image(Section.DeathValley, 'b_4132709_backyard_moon.jpg'),
    width: 751,
    height: 500
  },
  {
    src: image(Section.DeathValley, 'b_4132717_backyard_moon_greenthing.jpg'),
    width: 751,
    height: 500
  },
  {
    src: image(Section.DeathValley, 'b_4132739_deathvalley_mineraldeposits.jpg'),
    width: 753,
    height: 500
  },
  {
    src: image(Section.DeathValley, 'b_4132752_deathvalley_mooon.jpg'),
    width: 753,
    height: 500
  },
  {
    src: image(Section.DeathValley, 'b_4132763_goldenwaves.jpg'),
    width: 753,
    height: 500
  },
  {
    src: image(Section.DeathValley, 'b_4132793_redsunset.jpg'),
    width: 751,
    height: 500
  },
  {
    src: image(Section.DeathValley, 'b_4132804_sequoia_bigtree.jpg'),
    width: 332,
    height: 500
  },
];
export const hakoneGardens = [
  {
    src: image(Section.HakoneGardens, 'DSC05110.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: image(Section.HakoneGardens, 'DSC05124.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: image(Section.HakoneGardens, 'DSC05132.jpg'),
    width: 1365,
    height: 2048
  },
  {
    src: image(Section.HakoneGardens, 'DSC05145.jpg'),
    width: 1365,
    height: 2048
  },
  {
    src: image(Section.HakoneGardens, 'DSC05183.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: image(Section.HakoneGardens, 'DSC05193.jpg'),
    width: 2048,
    height: 1365
  },
  {
    src: image(Section.HakoneGardens, 'DSC05282.jpg'),
    width: 1365,
    height: 2048
  },
];
export const newMexico = [
  {
    src: image(Section.NewMexico, 'DSC05860.jpg'),
    width: 6000,
    height: 3376
  },
  {
    src: image(Section.NewMexico, 'DSC05976.jpg'),
    width: 6000,
    height: 3376
  },
  {
    src: image(Section.NewMexico, 'DSC07495.jpg'),
    width: 3376,
    height: 6000
  },
  {
    src: image(Section.NewMexico, 'DSC07527.jpg'),
    width: 6000,
    height: 3376
  },
  {
    src: image(Section.NewMexico, 'DSC07624.jpg'),
    width: 3376,
    height: 6000
  },
  {
    src: image(Section.NewMexico, 'DSC07788.jpg'),
    width: 6000,
    height: 3376
  },
  {
    src: image(Section.NewMexico, 'DSC07982.jpg'),
    width: 6000,
    height: 3376
  },
];
