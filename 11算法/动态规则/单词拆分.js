// ʾ�� 1��
// ����: s = "leetcode", wordDict = ["leet", "code"]
// ���: true
// ����: ���� true ��Ϊ "leetcode" ������ "leet" �� "code" ƴ�ӳɡ�
// ʾ�� 2��
// ����: s = "applepenapple", wordDict = ["apple", "pen"]
// ���: true
// ����: ���� true ��Ϊ "applepenapple" ������ "apple" "pen" "apple" ƴ�ӳɡ�
//      ע�⣬������ظ�ʹ���ֵ��еĵ��ʡ�
// ʾ�� 3��
// ����: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// ���: false

function getState(s, wordDict) {
    const n = s.length;
    const set = new Set(wordDict);
    let arr = new Array(n + 1).fill(false);
    arr[0] = true;
    for(let i = 1; i <= n; i++) {
        for(let j = 0; j < i; j++) {
            if(arr[j] && set.has(s.substr(j, i-j))) {//��̬ת�Ʒ���
                arr[i] = true;
                break;
            }
        }
    }
    return arr[n];
}

console.log(getState("catsandog", ["cats", "dog", "sand", "and", "cat"]))
console.log(getState("leetcode", ["leet", "code"]))
