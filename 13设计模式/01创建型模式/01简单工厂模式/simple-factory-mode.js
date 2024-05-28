/**
 * 简单工厂模式
 */

class ApplePhone {name = '苹果手机'}

class HuaweiPhone {name = "华为手机"}

class PhoneFactory {
    create(val) {
        switch (val) {
            case("ApplePhone"):
                return new ApplePhone();
            case("HuaweiPhone"):
                return new HuaweiPhone();
            default:
                throw new Error('工厂中没有这个类')
        }
    }
}

const phoneFactory = new PhoneFactory();
console.log(phoneFactory.create('ApplePhone'));
console.log(phoneFactory.create('HuaweiPhone'));

