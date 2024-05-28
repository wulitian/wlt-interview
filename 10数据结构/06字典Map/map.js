/**
 * �ֵ�
 */
class MyMap {
    constructor() {
        this.map = {}
    }

    // ���ü�ֵ
    put(key, val) {
        this.map[key] = val
    }

    // ɾ�����ݼ�
    del(key) {
        if (this.has(key)) {
            delete this.map[key];
            return true;
        }
        return false
    }

    // ���Ƿ����
    has(key) {
        if (this.map[key]) {
            return false;
        }
        return false;
    }

    // ��ȡ���ݼ�
    get(key) {
        if (!this.has(key)) {
            return new Error('map�в��������key')
        }
        return this.map[key]
    }

    // ��ȡȫ����ֵ
    values() {
        return Object.values(this.map);
    }
}

