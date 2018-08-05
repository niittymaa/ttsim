// the canonical part size the simulator runs at
export const PART_SIZE:number = 64;
export const SPACING:number = 68;
// the size of a ball in simulator units
export const BALL_RADIUS = 10;

export const PART_DENSITY:number = 0.100;
export const BALL_DENSITY:number = 0.008;

export const BALL_FRICTION:number = 0.03;
export const PART_FRICTION:number = 0.03;
export const DROP_FRICTION:number = 0;
export const BALL_FRICTION_STATIC:number = 0.03;
export const PART_FRICTION_STATIC:number = 0.03;
export const DROP_FRICTION_STATIC:number = 0;

// the ideal horizontal velocity at which a ball should be moving
export const IDEAL_VX:number = 1.5;
// the maximum acceleration to use when nudging the ball
export const NUDGE_ACCEL:number = 0.001;
// the maximum speed at which a part can move
export const MAX_V:number = 12;

// damping/counterweight constraint parameters
export const DAMPER_RADIUS:number = PART_SIZE / 2;
export const BIAS_STIFFNESS:number = BALL_DENSITY / 16;
export const BIAS_DAMPING:number = 0.3;
export const COUNTERWEIGHT_STIFFNESS:number = BALL_DENSITY / 32;
export const COUNTERWEIGHT_DAMPING:number = 0.1;

// collision filtering categories
export const DEFAULT_MASK:number = 0xFFFFFF;
export const PART_CATEGORY:number = 0x0001;
export const BALL_CATEGORY:number = 0x0002;
export const PIN_CATEGORY:number = 0x0004;
export const GATE_CATEGORY:number = 0x0008;
export const PART_MASK:number = BALL_CATEGORY | PIN_CATEGORY;
export const BALL_MASK:number = DEFAULT_MASK;
export const BALL_MASK_RELEASED:number = BALL_MASK ^ GATE_CATEGORY;
export const GATE_MASK:number = DEFAULT_MASK;
export const PIN_MASK:number = PART_CATEGORY;