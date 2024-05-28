/**
 * 工厂方法模式
 */

class ApplePhone {name = '苹果手机'}

class HuaweiPhone {name = "华为手机"}

class IFactory{ creat() { } }

class ApplePhoneFactory extends IFactory{
    create() {
       return new ApplePhone();
    }
}
class HuaweiPhoneFactory extends IFactory{
    create() {
        return new HuaweiPhone();
    }
}
const applePhoneFactory = new ApplePhoneFactory();
const huaweiPhoneFactory = new HuaweiPhoneFactory();
console.log(applePhoneFactory.create());
console.log(huaweiPhoneFactory.create());
