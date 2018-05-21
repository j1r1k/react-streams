import React from "react"
import { mergePlans, plan, stream } from "react-streams"
import { map } from "rxjs/operators"

const onInc = plan(map(() => state => ({ count: state.count + 2 })))
const onDec = plan(map(() => state => ({ count: state.count - 2 })))
const onReset = plan(map(() => state => ({ count: 4 })))

const Count = stream(converge({ onInc, onDec, onReset }))

export default () => (
  <Count count={4}>
    {({ count, onInc, onDec, onReset }) => (
      <div>
        <button id="dec" onClick={onDec} aria-label="decrement">
          -
        </button>
        <span id="count" aria-label="count">
          {count}
        </span>
        <button id="inc" onClick={onInc} aria-label="increment">
          +
        </button>
        <button onClick={onReset} aria-label="reset">
          Reset
        </button>
      </div>
    )}
  </Count>
)
