import {Composition, Folder} from 'remotion';
import {DURATION, DEFAULT_PROPS, FPS} from './constants';
import {LightThroughMedia} from './LightThroughMedia';

export const RemotionRoot = () => (
  <Folder name="Svitlo-Optical-Motion-Design">
    <Composition
      id="LightThroughMedia"
      component={LightThroughMedia}
      durationInFrames={DURATION}
      fps={FPS}
      width={1920}
      height={1080}
      defaultProps={DEFAULT_PROPS}
    />
    <Composition
      id="LightThroughMediaVertical"
      component={LightThroughMedia}
      durationInFrames={DURATION}
      fps={FPS}
      width={1080}
      height={1920}
      defaultProps={DEFAULT_PROPS}
    />
  </Folder>
);
