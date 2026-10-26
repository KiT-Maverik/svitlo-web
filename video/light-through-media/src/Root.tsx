import {Composition, Folder} from 'remotion';
import {DURATION, DEFAULT_PROPS, FPS} from './constants';
import {LightThroughMedia} from './LightThroughMedia';
import {FractionsAdShort} from './ad/FractionsAdShort';
import {AD_DURATION, AD_DEFAULT_PROPS} from './ad/ad.constants';

export const RemotionRoot = () => (
  <>
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
  <Folder name="Svitlo-Marketing-Shorts">
    <Composition
      id="FractionsAdShort"
      component={FractionsAdShort}
      durationInFrames={AD_DURATION}
      fps={FPS}
      width={1080}
      height={1920}
      defaultProps={AD_DEFAULT_PROPS}
    />
  </Folder>
  </>
);
