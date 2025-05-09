// src/components/scissorsGesture.js
import { Finger, FingerCurl, GestureDescription } from "fingerpose";

export const scissorsGesture = new GestureDescription('scissors');

scissorsGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
scissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
scissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);