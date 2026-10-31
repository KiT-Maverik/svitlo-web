export interface Practice_Locale {
  header: {
    eyebrow: string;
    title: string;
    description: string;
  };
  selector: {
    label: string;
    media: {
      vacuum: string;
      air: string;
      water: string;
    };
  };
  simulation: {
    trackPrefix: string;
    source: string;
    screen: string;
    play: string;
    pause: string;
    speedUnit: string;
  };
  insight: {
    quote: string;
  };
  notes: {
    caption: string;
    model: string;
    sourceLink: string;
  };
}
