export type Practice_Locale = {
  name: string;
  task: string;
  scene: {
    practice: Practice_Locale;
  }
}
