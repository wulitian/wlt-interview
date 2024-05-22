/**
 * 抽象工厂模式
 */

class ApplePhone {name = '苹果手机'}
class AppleTv {name = '苹果tv'}

class HuaweiPhone {name = "华为手机"}
class HuaweiTv {name = "华为tv"}

let AbstractFactory = class { createPhone() { }; createTV() { } }

class AppleFactory extends AbstractFactory{
    createPhone() {
        return new ApplePhone();
    }
    createTV() {
        return new AppleTv();
    }
}
class HuaweiFactory extends AbstractFactory{
    createPhone() {
        return new HuaweiPhone();
    }
    createTV() {
        return new HuaweiTv();
    }
}
const appleFactory = new AppleFactory();
const huaweiFactory = new HuaweiFactory();
console.log(appleFactory.createPhone());
console.log(appleFactory.createTV());
console.log(huaweiFactory.createPhone());
console.log(huaweiFactory.createTV());
