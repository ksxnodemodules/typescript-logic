import assert from 'static-type-assert'
import compare = assert.compare

import {
  If,
  Not,
  And,
  Or,
  Xor
} from './index'

compare<If<true, 'true', 'false'>, 'true'>('equal')
compare<If<false, 'true', 'false'>, 'false'>('equal')

compare<Not<true>, false>('equal')
compare<Not<false>, true>('equal')

compare<
  [
    And<false, false>,
    And<false, true>,
    And<true, false>,
    And<true, true>
  ],
  [false, false, false, true]
>('equal')

compare<
  [
    Or<false, false>,
    Or<false, true>,
    Or<true, false>,
    Or<true, true>
  ],
  [false, true, true, true]
>('equal')

compare<
  [
    Xor<false, false>,
    Xor<false, true>,
    Xor<true, false>,
    Xor<true, true>
  ],
  [false, true, true, false]
>('equal')
