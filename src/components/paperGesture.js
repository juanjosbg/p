// src/components/paperGesture.js
import { Finger, FingerCurl, GestureDescription } from "fingerpose";

export const paperGesture = new GestureDescription('paper');

for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  paperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}