/**
 * javascript 에서 array, object, map, set 4가지로 구현 가능.
 * 1. map의 경우 key로 object, array를 지정해줄 수 있기 때문에 복잡한 환경에서 유리.
 * 2. set의 경우 key value가 한 쌍으로 들어가기 때문에 중복된 값을 없애줌.
 */

const map = new Map();
map.set('a', '123');
map.set('b', '456');
console.log(map.get('a'));
console.log(map.get('b'));
console.log(map.keys());
console.log(map.values());

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(3);
console.log(set.keys());
console.log(set.values());