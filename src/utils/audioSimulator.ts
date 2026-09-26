/**
 * Web Audio API synthesizer for realistic heart sounds (B1 and B2 - Lub-Dub)
 * Zero external audio files required, operates completely offline and reliably.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playHeartSound(type: 'B1' | 'B2' | 'both' = 'both', rate = 1.0) {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    if (type === 'B1' || type === 'both') {
      // B1: First sound - closing of AV valves (mitral and tricuspid)
      // Lower pitch, slightly longer duration ("Lub") ~ 45-65Hz
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      const filter1 = ctx.createBiquadFilter();

      filter1.type = 'lowpass';
      filter1.frequency.setValueAtTime(120, now);

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(75, now);
      osc1.frequency.exponentialRampToValueAtTime(42, now + 0.12 / rate);

      gain1.gain.setValueAtTime(0, now);
      gain1.gain.linearRampToValueAtTime(0.7, now + 0.02 / rate);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.14 / rate);

      osc1.connect(filter1);
      filter1.connect(gain1);
      gain1.connect(ctx.destination);

      osc1.start(now);
      osc1.stop(now + 0.15 / rate);
    }

    if (type === 'B2' || type === 'both') {
      // B2: Second sound - closing of semilunar valves (aortic and pulmonary)
      // Higher frequency, shorter, sharper ("Dub") ~ 90-110Hz
      const delay = type === 'both' ? 0.28 / rate : 0;
      const b2Time = now + delay;

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      const filter2 = ctx.createBiquadFilter();

      filter2.type = 'lowpass';
      filter2.frequency.setValueAtTime(180, b2Time);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(115, b2Time);
      osc2.frequency.exponentialRampToValueAtTime(68, b2Time + 0.09 / rate);

      gain2.gain.setValueAtTime(0, b2Time);
      gain2.gain.linearRampToValueAtTime(0.65, b2Time + 0.015 / rate);
      gain2.gain.exponentialRampToValueAtTime(0.001, b2Time + 0.11 / rate);

      osc2.connect(filter2);
      filter2.connect(gain2);
      gain2.connect(ctx.destination);

      osc2.start(b2Time);
      osc2.stop(b2Time + 0.12 / rate);
    }
  } catch {
    // Graceful fallback if audio context is blocked
  }
}
