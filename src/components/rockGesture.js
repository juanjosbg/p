// src/components/rockGesture.js
import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const rockGesture = new GestureDescription('rock');

rockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
rockGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
rockGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);

rockGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
rockGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.25);
rockGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.25);

rockGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
rockGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

for (let finger of [Finger.Middle, Finger.Ring]) {
  rockGesture.addCurl(finger, FingerCurl.FullCurl, .75);
  rockGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}