//Thu Dec 18 2025 10:20:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x5bfdec = require("fs"),
  _0x1ecfc6 = process.env.QL_DIR || process.env.QL_BRANCH || _0x5bfdec.existsSync("/ql") || _0x5bfdec.existsSync("/ql/data");
!_0x1ecfc6 && (console.log("运行环境：仅限青龙面板"), process.exit(1));
const _0x2a9222 = require("querystring"),
  _0x479029 = require("axios"),
  _0x58b9cb = require("crypto"),
  {
    SocksProxyAgent: _0x40c766
  } = require("socks-proxy-agent"),
  _0x5bc82d = require("path"),
  _0xfc78f = console.log;
console.log = function (..._0x2595b3) {
  const _0x2e624a = new Date(),
    _0x101f98 = "[" + String(_0x2e624a.getHours()).padStart(2, "0") + ":" + String(_0x2e624a.getMinutes()).padStart(2, "0") + ":" + String(_0x2e624a.getSeconds()).padStart(2, "0") + "]";
  _0xfc78f(_0x101f98, ..._0x2595b3);
};
function _0x198fda() {
  const _0x51c9bb = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x51c9bb[Math.floor(Math.random() * _0x51c9bb.length)];
}
function _0xd751f0(_0x5b7f39, _0x1a8ff7 = "") {
  if (process.env[_0x5b7f39] !== undefined) return process.env[_0x5b7f39];
  const _0x5ebb6d = _0x5b7f39.toLowerCase();
  for (const _0x472da2 in process.env) {
    {
      if (_0x472da2.toLowerCase() === _0x5ebb6d) return process.env[_0x472da2];
    }
  }
  return _0x1a8ff7;
}
function _0x45ceaf(_0x526ae9, _0x165e19) {
  const _0x3a747a = parseInt(_0xd751f0(_0x526ae9), 10);
  return isNaN(_0x3a747a) ? _0x165e19 : _0x3a747a;
}
function _0x58354b(_0x1ce0a8) {
  const _0x4169ca = "xK9mP2nQ5rT8wY3";
  let _0x5e1e61 = "";
  const _0x51998f = Buffer.from(_0x1ce0a8, "base64").toString("binary");
  for (let _0x55666b = 0; _0x55666b < _0x51998f.length; _0x55666b++) {
    _0x5e1e61 += String.fromCharCode(_0x51998f.charCodeAt(_0x55666b) ^ _0x4169ca.charCodeAt(_0x55666b % _0x4169ca.length));
  }
  return _0x5e1e61;
}
const _0x83db87 = _0xd751f0("DEV_MODE") === "1" || _0xd751f0("DEV_MODE") === "true",
  _0x4df0ea = _0xd751f0("SIGN_API_URL", _0x58354b("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcCyJeQyBaHg==")),
  _0x31b84e = _0x58354b("EzhmHjlVAA5UAj1nBTxACCRXHjVtBTRMLWYIRW0=");
function _0x2f7fc0(_0x377e11, _0x2fb887) {
  try {
    {
      const _0xe1ffea = Buffer.from(_0x377e11, "base64").toString("binary");
      let _0xea158 = "";
      const _0xa47533 = _0x2fb887.length;
      for (let _0x475c64 = 0; _0x475c64 < _0xe1ffea.length; _0x475c64++) {
        _0xea158 += String.fromCharCode(_0xe1ffea.charCodeAt(_0x475c64) ^ _0x2fb887.charCodeAt(_0x475c64 % _0xa47533));
      }
      return JSON.parse(_0xea158);
    }
  } catch (_0xfa929c) {
    console.log("解密失败: " + _0xfa929c.message);
    return null;
  }
}
async function _0x14d423() {
  return [_0x4df0ea];
}
async function _0x46536c() {
  return [_0x4df0ea];
}
const _0xa1ed93 = _0xd751f0("agreement"),
  _0x5d71d2 = _0x45ceaf("low", 10),
  _0x5b8da8 = _0x45ceaf("round", 35),
  _0x146e4d = _0x45ceaf("coin", 500000),
  _0x3d97cc = _0x45ceaf("limit", 3),
  _0x180e02 = _0xd751f0("km"),
  _0x575b7d = _0xd751f0("withdrawAPI") || _0x58354b("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcDyJNBTRADyYbAjxI"),
  _0x5beeaf = _0xd751f0("push");
function _0x35ea0b() {
  const _0x6157cd = _0xd751f0("tixian");
  if (!_0x6157cd) return {
    "enabled": false,
    "provider": "微信",
    "time": "",
    "autoExchange": false,
    "amount": 0
  };
  const _0x92e029 = _0x6157cd.replace(/\//g, ",").split(",").map(_0x2d6718 => _0x2d6718.trim());
  if (_0x92e029.length < 5) return {
    "enabled": false,
    "provider": "微信",
    "time": "",
    "autoExchange": false,
    "amount": 0
  };
  const _0x35bcce = {
    "enabled": false,
    "provider": "微信",
    "time": "",
    "autoExchange": false,
    "amount": 0
  };
  _0x92e029[0] && _0x92e029[0] === "1" ? _0x35bcce.enabled = true : _0x35bcce.enabled = false;
  if (_0x92e029[1]) {
    {
      const _0xfa5503 = {
          "wx": "微信",
          "zfb": "支付宝",
          "yhk": "银行卡"
        },
        _0x1173ab = _0x92e029[1].toLowerCase();
      !_0xfa5503[_0x1173ab] && (_0x35bcce.enabled = false);
      _0x35bcce.provider = _0xfa5503[_0x1173ab] || "微信";
    }
  } else _0x35bcce.enabled = false;
  if (_0x92e029[2]) {
    const _0x1fbf28 = /^\d{1,2}\.\d{2}$/;
    if (!_0x1fbf28.test(_0x92e029[2])) {
      _0x35bcce.enabled = false;
    }
    _0x35bcce.time = _0x92e029[2];
  } else _0x35bcce.enabled = false;
  _0x92e029[3] ? (_0x92e029[3] !== "2" && _0x92e029[3] !== "3" && (_0x35bcce.enabled = false), _0x35bcce.autoExchange = _0x92e029[3] === "2") : _0x35bcce.enabled = false;
  if (_0x92e029[4]) {
    const _0x4eded9 = parseFloat(_0x92e029[4]);
    (isNaN(_0x4eded9) || _0x4eded9 < 0) && (_0x35bcce.enabled = false);
    _0x35bcce.amount = isNaN(_0x4eded9) ? 0 : _0x4eded9;
  } else _0x35bcce.enabled = false;
  return _0x35bcce;
}
const _0x49dfac = _0x35ea0b();
function _0x276dc4() {
  const _0x1af150 = _0xd751f0("Task");
  if (!_0x1af150) return ["food", "box", "look"];
  const _0x3a7af6 = _0x1af150.replace(/\//g, ",").split(",").map(_0x2909be => _0x2909be.trim().toLowerCase()).filter(Boolean),
    _0x3f9b06 = ["food", "box", "look"],
    _0x518883 = _0x3a7af6.filter(_0x5bf59a => _0x3f9b06.includes(_0x5bf59a));
  if (_0x518883.length === 0) return ["food", "box", "look"];
  return _0x518883;
}
function _0x5cd72f() {
  const _0x25b7f5 = [],
    _0x4bf693 = new Set(),
    _0x4a4c87 = _0xd751f0("ksck");
  if (_0x4a4c87) {
    const _0x5d6ba1 = _0x4a4c87.split("&").map(_0x183b24 => _0x183b24.trim()).filter(Boolean);
    _0x25b7f5.push(..._0x5d6ba1);
  }
  for (let _0x2429c3 = 1; _0x2429c3 <= 666; _0x2429c3++) {
    const _0x1e9fb7 = "ksck" + _0x2429c3,
      _0x3002f5 = _0xd751f0(_0x1e9fb7);
    if (_0x3002f5) {
      {
        const _0x275d9f = _0x3002f5.split("&").map(_0x16e85b => _0x16e85b.trim()).filter(Boolean);
        _0x25b7f5.push(..._0x275d9f);
      }
    }
  }
  const _0x56f739 = [];
  for (const _0x26f2f1 of _0x25b7f5) {
    !_0x4bf693.has(_0x26f2f1) && (_0x4bf693.add(_0x26f2f1), _0x56f739.push(_0x26f2f1));
  }
  console.log("从环境变量中解析到 " + _0x56f739.length + " 个唯一配置");
  return _0x56f739;
}
const _0x47ec5e = _0x58354b("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcGTtQQyBaHg=="),
  _0x4a8909 = _0xd751f0("KM_API_URL", _0x58354b("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcEyYXHThC")),
  _0x2f953f = _0x58354b("EzhmDCVGAQ5cAgtLEjpBHT9mBjVLMWMFQGA="),
  _0xd00594 = _0x58354b("EzhmHjlVAA5UAj1nBDxQCi5NMjtXFw4HQmYM"),
  _0x45cfbc = _0x58354b("EzhmBj1tDyFcLSddFCtWDBRSCCltXGEHRg==");
async function _0x329888(_0x4aac80) {
  if (!_0x4aac80) {
    {
      console.log("\n" + "=".repeat(50));
      console.log("[x] 卡密验证失败");
      console.log("=".repeat(50));
      console.log("未检测到卡密（km变量）");
      console.log("");
      console.log("卡密免费获取Q群：1034077503");
      console.log("=".repeat(50) + "\n");
      process.exit(1);
    }
  }
  try {
    {
      const _0x5b50a9 = Math.floor(Date.now() / 1000).toString(),
        _0x203116 = _0x58b9cb.createHash("md5").update(_0x4aac80 + _0x5b50a9 + _0x45cfbc).digest("hex"),
        _0x30b77b = await _0x479029.post(_0x4a8909, {
          "action": "verify",
          "km": _0x4aac80,
          "timestamp": _0x5b50a9,
          "sign": _0x203116
        }, {
          "timeout": 10000
        }),
        _0x3d11b8 = _0x30b77b.data;
      if (_0x3d11b8.success) {
        console.log("✅ 卡密验证成功");
        return true;
      } else console.log("❌ 卡密验证失败: " + _0x3d11b8.message), process.exit(1);
    }
  } catch (_0x2a6be6) {
    console.log("❌ 卡密验证失败: " + _0x2a6be6.message);
    process.exit(1);
  }
}
async function _0x4d69d7(_0x44b5a0) {
  try {
    const _0x3dafc4 = await _0x479029.post(_0x4a8909, {
        "action": "verify",
        "km": _0x44b5a0
      }, {
        "timeout": 10000
      }),
      _0x1f1547 = _0x3dafc4.data;
    return {
      "valid": _0x1f1547.success,
      "message": _0x1f1547.message || ""
    };
  } catch (_0x93dcb5) {
    console.log("卡密检查失败: " + _0x93dcb5.message);
    return {
      "valid": true,
      "message": _0x93dcb5.message
    };
  }
}
let _0x2f18af = false,
  _0x4cc20a = 0;
const _0x4456e8 = 3;
let _0x7a412c = 0;
const _0x5e589c = 10;
let _0x3e1b2d = null;
function _0x4dccc1(_0x594b43) {
  const _0x4270b5 = 300000,
    _0x557afd = setInterval(async () => {
      {
        console.log("\n定期检查卡密状态...");
        const _0x1ee43b = await _0x4d69d7(_0x594b43);
        if (!_0x1ee43b.valid) {
          console.log("\n" + "=".repeat(50));
          console.log("[x] 卡密已失效！");
          console.log("=".repeat(50));
          console.log("" + _0x1ee43b.message);
          console.log("正在停止所有任务...");
          console.log("=".repeat(50) + "\n");
          _0x2f18af = true;
          clearInterval(_0x557afd);
        } else console.log("卡密状态正常\n");
      }
    }, _0x4270b5);
  return _0x557afd;
}
async function _0x5e6c9e() {
  const _0x560a50 = ["https://api.ipify.org?format=json", "https://httpbin.org/ip", "https://api.ip.sb/ip"];
  for (const _0x148c74 of _0x560a50) {
    try {
      const {
        body: _0x4708fb
      } = await _0xf82e1c({
        "method": "GET",
        "url": _0x148c74,
        "timeout": 5000
      }, null, "获取公网IP");
      if (_0x4708fb) {
        let _0x74a4db = null;
        if (typeof _0x4708fb === "object") _0x74a4db = _0x4708fb.ip || _0x4708fb.origin;else typeof _0x4708fb === "string" && (_0x74a4db = _0x4708fb.trim());
        if (_0x74a4db && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x74a4db)) {
          return _0x74a4db;
        }
      }
    } catch (_0x46bdca) {
      continue;
    }
  }
  return null;
}
async function _0x188135() {
  let _0x588ab1 = await _0x5e6c9e();
  if (!_0x588ab1) {
    const _0x4b1089 = _0xd751f0("ip");
    if (_0x4b1089 && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x4b1089)) console.log("⚠️  自动获取IP失败，使用手动配置: " + _0x4b1089), _0x588ab1 = _0x4b1089;else return console.log("❌ 无法获取公网IP，请检查网络连接或配置ip变量"), false;
  }
  try {
    {
      const _0x5a2da9 = Math.floor(Date.now() / 1000).toString(),
        _0x2c3570 = "kspt.js脚本",
        _0x352130 = _0x58b9cb.createHash("md5").update(_0x588ab1 + _0x2c3570 + _0x5a2da9 + _0x2f953f).digest("hex"),
        _0x3445d2 = await _0x479029.post(_0x47ec5e, _0x2a9222.stringify({
          "action": "auto_add_ip",
          "ip": _0x588ab1,
          "source": _0x2c3570,
          "timestamp": _0x5a2da9,
          "sign": _0x352130
        }), {
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "timeout": 10000
        }),
        _0x3c8e82 = _0x3445d2.data;
      if (_0x3c8e82 && _0x3c8e82.success) return console.log("✅ 白名单添加成功: " + _0x588ab1), true;else {
        {
          console.log("⚠️  白名单自动添加失败: " + (_0x3c8e82?.["message"] || "未知错误"));
          console.log("🔍 检查IP是否已在白名单中...");
          const _0x10ec25 = Math.floor(Date.now() / 1000).toString(),
            _0x3c07d8 = _0x58b9cb.createHash("md5").update(_0x588ab1 + "heartbeat" + _0x10ec25 + _0x2f953f).digest("hex"),
            _0x4c4cde = await _0x479029.post(_0x47ec5e, _0x2a9222.stringify({
              "action": "check_whitelist",
              "ip": _0x588ab1,
              "timestamp": _0x10ec25,
              "sign": _0x3c07d8
            }), {
              "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              "timeout": 10000
            }),
            _0x42c108 = _0x4c4cde.data;
          if (_0x42c108 && _0x42c108.in_whitelist === true) return console.log("✅ IP已在白名单中（可能是管理员手动添加）: " + _0x588ab1), true;else {
            console.log("⚠️  IP检查失败，但将继续尝试运行脚本");
            console.log("   返回数据: " + JSON.stringify(_0x42c108));
            console.log("   提示: 如果后续报错，请联系管理员确认白名单: " + _0x588ab1);
            return true;
          }
        }
      }
    }
  } catch (_0x4b4793) {
    console.log("❌ 白名单操作异常: " + _0x4b4793.message);
    return false;
  }
}
let _0x46181d = null,
  _0x5088d8 = null;
async function _0x4d6554() {
  try {
    let _0x41da97 = _0x5088d8;
    if (!_0x41da97) {
      _0x41da97 = await _0x5e6c9e();
      if (!_0x41da97) {
        const _0x57aaa9 = _0xd751f0("ip");
        if (_0x57aaa9 && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x57aaa9)) _0x41da97 = _0x57aaa9;else {
          {
            console.log("⚠️  心跳检查：无法获取IP地址，跳过本次检查");
            return;
          }
        }
      }
      _0x5088d8 = _0x41da97;
    }
    const _0x5aa03a = Math.floor(Date.now() / 1000).toString(),
      _0x186d42 = _0x58b9cb.createHash("md5").update(_0x41da97 + "heartbeat" + _0x5aa03a + _0x2f953f).digest("hex"),
      _0x212cb8 = await _0x479029.post(_0x47ec5e, _0x2a9222.stringify({
        "action": "check_whitelist",
        "ip": _0x41da97,
        "timestamp": _0x5aa03a,
        "sign": _0x186d42
      }), {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": 10000
      }),
      _0x1dcfc6 = _0x212cb8.data;
    if (_0x1dcfc6 && _0x1dcfc6.in_whitelist === true) {} else console.log("❌ 白名单心跳检查失败: " + (_0x1dcfc6?.["message"] || "IP不在白名单中")), console.log("   返回数据: " + JSON.stringify(_0x1dcfc6)), console.log("⚠️  可能原因: 1.白名单刚添加未生效 2.IP已过期被删除 3.网络波动"), console.log("⚠️  将在下次检查时重新验证，暂不退出脚本");
  } catch (_0x27e212) {
    console.log("⚠️  白名单心跳检查异常: " + _0x27e212.message + "，继续运行");
  }
}
function _0x589d1f() {
  _0x46181d && clearInterval(_0x46181d);
  console.log("✅ 白名单心跳检查已启动（后台静默运行，每5分钟检查一次，仅异常时提示）");
  setTimeout(() => {
    _0x4d6554();
  }, 10000);
  _0x46181d = setInterval(() => {
    _0x4d6554();
  }, 300000);
}
function _0x53e9dc() {
  if (_0xa1ed93 !== "我同意协议") {
    console.log("\n" + "=".repeat(60));
    console.log("免责协议");
    console.log("=".repeat(60));
    console.log("");
    console.log("重要声明：");
    console.log("");
    console.log("1. 本脚本仅供学习交流使用，严禁用于商业用途");
    console.log("2. 使用本脚本造成的任何后果由使用者自行承担");
    console.log("3. 本脚本作者不对使用本脚本产生的任何问题负责");
    console.log("4. 使用本脚本即表示您已充分理解并接受以上条款");
    console.log("5. 脚本完全免费，任何收费行为均与作者无关");
    console.log("");
    console.log("=".repeat(60));
    console.log("");
    console.log("如需使用，请设置环境变量：");
    console.log("   agreement=我同意协议");
    console.log("");
    console.log("更新Q群：1034077503");
    console.log("=".repeat(60) + "\n");
    process.exit(1);
  }
}
function _0x4b1f7d() {
  if (!_0x49dfac.time) return true;
  try {
    const _0x8e8fb2 = new Date(),
      _0x9bf55c = _0x8e8fb2.getHours(),
      _0x53d559 = _0x8e8fb2.getMinutes(),
      _0x4b1cb7 = _0x49dfac.time.replace(/:/g, ".").split("."),
      _0x3520e0 = parseInt(_0x4b1cb7[0]) || 0,
      _0x38d3a9 = parseInt(_0x4b1cb7[1]) || 0,
      _0x1849e4 = _0x9bf55c * 60 + _0x53d559,
      _0x2bd109 = _0x3520e0 * 60 + _0x38d3a9,
      _0x13eeb2 = Math.abs(_0x1849e4 - _0x2bd109);
    return _0x13eeb2 <= 5;
  } catch (_0x12f818) {
    console.log("时间解析失败: " + _0x12f818.message + "，默认允许提现");
    return true;
  }
}
async function _0x521057(_0x4c0ba3, _0x131d2c) {
  if (!_0x575b7d) return {
    "success": false,
    "message": "未配置提现API"
  };
  try {
    const _0x35ebf5 = new URLSearchParams({
        "action": "withdraw_info",
        "cookie": _0x4c0ba3,
        "card": _0x180e02
      }),
      _0x238f23 = await _0x479029.post(_0x575b7d, _0x35ebf5.toString(), {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": 30000
      }),
      _0x371582 = _0x238f23.data;
    return _0x371582.success ? {
      "success": true,
      "data": _0x371582.data
    } : {
      "success": false,
      "message": _0x371582.message
    };
  } catch (_0x20a837) {
    return {
      "success": false,
      "message": _0x20a837.message
    };
  }
}
async function _0x3083a3(_0x38e1cf, _0x5c7b41) {
  if (!_0x575b7d) return {
    "success": false,
    "message": "未配置提现API"
  };
  try {
    const _0x416953 = new URLSearchParams({
        "action": "bind_info",
        "cookie": _0x38e1cf,
        "card": _0x180e02
      }),
      _0x297983 = await _0x479029.post(_0x575b7d, _0x416953.toString(), {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": 30000
      }),
      _0x171d97 = _0x297983.data;
    if (_0x171d97.success) {
      return {
        "success": true,
        "data": _0x171d97.data
      };
    } else return {
      "success": false,
      "message": _0x171d97.message
    };
  } catch (_0x101391) {
    return {
      "success": false,
      "message": _0x101391.message
    };
  }
}
async function _0x1328a9(_0x18fa99, _0x44f2b1) {
  if (!_0x575b7d) return console.log("[" + _0x44f2b1 + "] 未配置提现API，跳过提现"), {
    "success": false,
    "message": "未配置提现API"
  };
  try {
    console.log("[" + _0x44f2b1 + "] 开始提现...");
    const _0x4e971d = _0x49dfac.autoExchange ? "auto_withdraw" : "withdraw_by_amount",
      _0x1c59bf = {
        "action": _0x4e971d,
        "cookie": _0x18fa99,
        "card": _0x180e02,
        "provider": _0x49dfac.provider,
        "auto_exchange": _0x49dfac.autoExchange ? "true" : "false"
      };
    _0x49dfac.amount > 0 && (_0x1c59bf.amount = _0x49dfac.amount, _0x1c59bf.action = "withdraw_by_amount");
    const _0x324588 = await _0x479029.post(_0x575b7d, new URLSearchParams(_0x1c59bf).toString(), {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": 30000
      }),
      _0x277167 = _0x324588.data;
    if (_0x277167.success) return console.log("[" + _0x44f2b1 + "] ✓ 提现成功！"), console.log("   金额: " + _0x277167.data.amount + "元"), console.log("   渠道: " + _0x277167.data.providerName), {
      "success": true,
      "data": _0x277167.data
    };else {
      console.log("[" + _0x44f2b1 + "] ✗ 提现失败: " + _0x277167.message);
      return {
        "success": false,
        "message": _0x277167.message
      };
    }
  } catch (_0x1571fc) {
    console.log("[" + _0x44f2b1 + "] ✗ 提现请求失败: " + _0x1571fc.message);
    return {
      "success": false,
      "message": _0x1571fc.message
    };
  }
}
async function _0x1e9c45(_0x3cbe8d) {
  if (!_0x575b7d || !_0x49dfac.enabled) {
    return;
  }
  if (_0x49dfac.time && !_0x4b1f7d()) {
    const _0x2d77fd = new Date(),
      _0x46bcc4 = String(_0x2d77fd.getHours()).padStart(2, "0") + ":" + String(_0x2d77fd.getMinutes()).padStart(2, "0");
    console.log("\n" + "=".repeat(50));
    console.log("当前时间: " + _0x46bcc4 + "，未到提现时间: " + _0x49dfac.time);
    console.log("跳过提现");
    console.log("=".repeat(50) + "\n");
    return;
  }
  console.log("\n" + "=".repeat(50));
  console.log("开始自动提现");
  console.log("提现渠道: " + _0x49dfac.provider);
  console.log("金币兑换: " + (_0x49dfac.autoExchange ? "开启" : "关闭"));
  console.log("提现金额: " + (_0x49dfac.amount > 0 ? _0x49dfac.amount + "元" : "自动选择最大"));
  _0x49dfac.time && console.log("提现时间: " + _0x49dfac.time);
  console.log("=".repeat(50) + "\n");
  const _0x4f7236 = [];
  for (const _0x392d51 of _0x3cbe8d) {
    try {
      const _0x52be99 = await _0x1328a9(_0x392d51.cookie, _0x392d51.nickname || "账号" + _0x392d51.index);
      _0x4f7236.push({
        "index": _0x392d51.index,
        "nickname": _0x392d51.nickname || "账号" + _0x392d51.index,
        ..._0x52be99
      });
      _0x392d51.index < _0x3cbe8d.length && (await new Promise(_0x39cfe8 => setTimeout(_0x39cfe8, 3000)));
    } catch (_0xc64969) {
      console.log("[账号" + _0x392d51.index + "] 提现异常: " + _0xc64969.message);
      _0x4f7236.push({
        "index": _0x392d51.index,
        "nickname": _0x392d51.nickname || "账号" + _0x392d51.index,
        "success": false,
        "message": _0xc64969.message
      });
    }
  }
  console.log("\n" + "=".repeat(50));
  console.log("提现汇总");
  console.log("=".repeat(50));
  const _0x48501a = _0x4f7236.filter(_0x524c62 => _0x524c62.success).length,
    _0x19eaab = _0x4f7236.filter(_0x5a8984 => _0x5a8984.success && _0x5a8984.data).reduce((_0x4f8846, _0x3496c8) => _0x4f8846 + (_0x3496c8.data.amount || 0), 0);
  console.log("成功: " + _0x48501a + "/" + _0x4f7236.length + "个账号");
  _0x19eaab > 0 && console.log("总计提现: " + _0x19eaab.toFixed(2) + "元");
  _0x4f7236.forEach(_0x4f059a => {
    {
      if (_0x4f059a.success) {
        console.log("✓ [" + _0x4f059a.nickname + "] " + _0x4f059a.data.amount + "元 → " + _0x4f059a.data.providerName);
      } else {
        console.log("✗ [" + _0x4f059a.nickname + "] " + _0x4f059a.message);
      }
    }
  });
  console.log("=".repeat(50) + "\n");
}
async function _0x3eeaf8(_0x436ff5, _0xd09ca8) {
  if (!_0x5beeaf) {
    return;
  }
  try {
    const {
      response: _0x7577ac,
      body: _0x4cf536
    } = await _0xf82e1c({
      "method": "POST",
      "url": "https://www.pushplus.plus/send",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({
        "token": _0x5beeaf,
        "title": _0x436ff5,
        "content": _0xd09ca8,
        "template": "html"
      }),
      "timeout": 10000
    }, null, "PushPlus推送");
    _0x4cf536 && _0x4cf536.code === 200 && console.log("✅ 推送发送成功！");
  } catch (_0x3698bd) {}
}
async function _0x14218e() {
  try {
    {
      const _0x11f88c = _0x58354b("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcGTtQQyBaHm5UESBRGDcOHy5NMjFcAD5AHDddGjxdDA=="),
        _0x7397dc = await _0x479029.get(_0x11f88c, {
          "timeout": 3000,
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
          }
        });
      if (_0x7397dc.data && _0x7397dc.data.success && _0x7397dc.data.data) {
        return;
      }
    }
  } catch (_0x4b2d7d) {
    console.log("远程公告获取失败，继续执行脚本");
  }
}
async function _0x1ca8f8() {
  _0x53e9dc();
  await _0x329888(_0x180e02);
  _0x3e1b2d = _0x4dccc1(_0x180e02);
  console.log("📢 使用说明");
  console.log("─".repeat(50));
  console.log("我们不会收取任何费用，也不会分成。");
  console.log("我们的工具不会偷ck。");
  console.log("我们的脚本不可以是盗版的。");
  console.log("你们购买就是赞助了。");
  console.log("如你想赞助本项目请项目地址地址扫码赞助。");
  console.log("永久卡密: km更新群:1034077503");
  console.log("─".repeat(50));
  console.log("");
  console.log("📢 更新Q群");
  console.log("─".repeat(50));
  console.log("1034077503");
  console.log("─".repeat(50));
  console.log("");
  const _0x48402d = await _0x188135();
  !_0x48402d && process.exit(1);
  _0x5088d8 = await _0x5e6c9e();
  if (!_0x5088d8) {
    const _0x1ae323 = _0xd751f0("ip");
    _0x1ae323 && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x1ae323) && (_0x5088d8 = _0x1ae323);
  }
  _0x589d1f();
  const _0x22be13 = _0x59b878(),
    _0x45223c = _0x276dc4(),
    _0x363403 = ["免费脚本，持续更新", "更新Q群：1034077503", "免费脚本，欢迎加入Q群：1034077503", "完全免费，Q群获取最新版本：1034077503", "免费使用，更新请关注Q群：1034077503"],
    _0x581913 = _0x363403[Math.floor(Math.random() * _0x363403.length)];
  console.log(_0x581913);
  console.log("=".repeat(50));
  console.log("已同意免责协议");
  console.log("账号数量: " + _0x22be13.length + "个");
  console.log("执行任务: " + _0x45223c.join(", "));
  console.log("配置参数（可自定义）：");
  console.log("   执行任务: " + _0x45223c.join(",") + " → Task");
  console.log("   任务轮数: " + _0x5b8da8 + " → round");
  console.log("   金币上限: " + _0x146e4d + " → coin");
  console.log("   低奖励阈值: " + _0x5d71d2 + " → low");
  console.log("   连续低奖励上限: " + _0x3d97cc + " → limit");
  if (_0x49dfac.enabled && _0x575b7d) {
    const _0x1d9dba = {
        "微信": "WX",
        "支付宝": "ZFB",
        "银行卡": "YHK"
      },
      _0xb677da = _0x1d9dba[_0x49dfac.provider] || "WX",
      _0x3e3688 = _0x49dfac.time || "24.00",
      _0x5ca570 = _0x49dfac.autoExchange ? "2" : "3";
    console.log("   提现配置: 1," + _0xb677da + "," + _0x3e3688 + "," + _0x5ca570 + "," + (_0x49dfac.amount || 0) + " → tixian");
  } else {
    console.log("   提现配置: 0,WX,24.00,3,30 → tixian");
  }
  _0x5beeaf ? console.log("   推送配置: 已启用 → push (任务完成后自动推送)") : console.log("   推送配置: 未启用 → push (设置token启用)");
  _0x83db87 && console.log("开发模式已开启");
  console.log("=".repeat(50) + "\n");
  !_0x22be13.length && (console.log("没有找到有效账号，程序退出"), process.exit(1));
  if (_0x49dfac.enabled && _0x575b7d) for (const _0x1daeb1 of _0x22be13) {
    try {
      const _0x67dd11 = _0x1daeb1.remark || "账号" + _0x1daeb1.index,
        _0x59b284 = await _0x521057(_0x1daeb1.cookie, _0x67dd11);
      if (_0x59b284.success && _0x59b284.data) {
        {
          const _0x1e69a0 = _0x59b284.data.balance || 0,
            _0x5de4ee = _0x59b284.data.amountYuan || _0x59b284.data.amounts || [],
            _0x316199 = _0x5de4ee.filter(_0x1a0119 => _0x1a0119 >= 1),
            _0x5b82ed = _0x316199.length > 0 ? _0x316199.join(", ") : "无";
          console.log("[" + _0x67dd11 + "] 余额: " + _0x1e69a0.toFixed(2) + "元，可提现档位: " + _0x5b82ed + "元");
        }
      } else console.log("[" + _0x67dd11 + "] 查询额度失败: " + (_0x59b284.message || "未知错误"));
      await new Promise(_0x32ddd8 => setTimeout(_0x32ddd8, 500));
      const _0x32d6eb = await _0x3083a3(_0x1daeb1.cookie, _0x67dd11);
      if (_0x32d6eb.success && _0x32d6eb.data && _0x32d6eb.data.bindInfo) {
        const _0x1e7a11 = [],
          _0x57c1a3 = {
            "WECHAT": "微信",
            "ALIPAY": "支付宝",
            "UNION_PAY_BANK": "银行卡"
          };
        for (const _0x2ec7e9 of _0x32d6eb.data.bindInfo) {
          if (_0x2ec7e9.hasBind && _0x2ec7e9.provider) {
            const _0x1bc806 = _0x57c1a3[_0x2ec7e9.provider] || _0x2ec7e9.provider,
              _0x17ec96 = _0x2ec7e9.nickname ? _0x1bc806 + "(" + _0x2ec7e9.nickname + ")" : _0x1bc806;
            _0x1e7a11.push(_0x17ec96);
          }
        }
        const _0x10a097 = _0x1e7a11.length > 0 ? _0x1e7a11.join(", ") : "无";
        console.log("[" + _0x67dd11 + "] 已绑定: " + _0x10a097);
      } else console.log("[" + _0x67dd11 + "] 查询绑定失败: " + (_0x32d6eb.message || "未知错误"));
      await new Promise(_0x28712a => setTimeout(_0x28712a, 500));
    } catch (_0x11c14d) {
      console.log("[账号" + _0x1daeb1.index + "] 查询异常: " + _0x11c14d.message);
    }
  }
  const _0x1bf51c = _0x45ceaf("max", 888);
  console.log("并发数: " + _0x1bf51c + "    轮数: " + _0x5b8da8 + "\n");
  const _0x33e5b3 = [];
  await _0x595618(_0x22be13, _0x1bf51c, async _0x431beb => {
    {
      console.log("\n开始处理 " + _0x431beb.index + "号账号" + (_0x431beb.remark ? "(" + _0x431beb.remark + ")" : ""));
      try {
        const _0x37da7a = await _0x2a6a16(_0x431beb);
        _0x33e5b3.push({
          "index": _0x431beb.index,
          "remark": _0x431beb.remark || "",
          "nickname": _0x37da7a?.["nickname"] || "账号" + _0x431beb.index,
          "initialCoin": _0x37da7a?.["initialCoin"] || 0,
          "finalCoin": _0x37da7a?.["finalCoin"] || 0,
          "coinChange": _0x37da7a?.["coinChange"] || 0,
          "initialCash": _0x37da7a?.["initialCash"] || 0,
          "finalCash": _0x37da7a?.["finalCash"] || 0,
          "cashChange": _0x37da7a?.["cashChange"] || 0,
          "stats": _0x37da7a?.["stats"] || {},
          "coinLimitExceeded": _0x37da7a?.["coinLimitExceeded"] || false
        });
      } catch (_0x2cd30e) {
        console.log("[x] 账号[" + _0x431beb.index + "] 执行异常：" + _0x2cd30e.message);
        _0x33e5b3.push({
          "index": _0x431beb.index,
          "remark": _0x431beb.remark || "",
          "nickname": "账号" + _0x431beb.index,
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "initialCash": 0,
          "finalCash": 0,
          "cashChange": 0,
          "error": _0x2cd30e.message
        });
      }
    }
  });
  _0x33e5b3.sort((_0x3df56e, _0x446a81) => _0x3df56e.index - _0x446a81.index);
  console.log("\n全部任务完成!");
  _0x5c22a8(_0x33e5b3);
  if (_0x49dfac.enabled && _0x575b7d) {
    {
      const _0x23c4c7 = _0x22be13.map((_0x419278, _0x3316b8) => ({
        "index": _0x419278.index,
        "nickname": _0x33e5b3[_0x3316b8]?.["nickname"] || "账号" + _0x419278.index,
        "cookie": _0x419278.cookie
      }));
      await _0x1e9c45(_0x23c4c7);
    }
  }
  if (_0x5beeaf) {
    const _0x18b144 = _0x33e5b3.reduce((_0x47b6fc, _0xa006e1) => _0x47b6fc + (parseInt(_0xa006e1.initialCoin) || 0), 0),
      _0xdca0e9 = _0x33e5b3.reduce((_0x42d7d5, _0x7135f3) => _0x42d7d5 + (parseInt(_0x7135f3.finalCoin) || 0), 0),
      _0xc3c692 = _0xdca0e9 - _0x18b144,
      _0x106b34 = _0x33e5b3.reduce((_0xa2c4e8, _0x23d57d) => _0xa2c4e8 + (parseFloat(_0x23d57d.initialCash) || 0), 0),
      _0x4e74ba = _0x33e5b3.reduce((_0x526209, _0x4b54d3) => _0x526209 + (parseFloat(_0x4b54d3.finalCash) || 0), 0),
      _0x3b0274 = _0x4e74ba - _0x106b34;
    let _0x1105e0 = 0,
      _0x322d4e = 0,
      _0x3ac137 = 0;
    _0x33e5b3.forEach(_0x4596e0 => {
      _0x4596e0.stats && Object.values(_0x4596e0.stats).forEach(_0x39a27e => {
        _0x1105e0 += _0x39a27e.success + _0x39a27e.failed;
        _0x322d4e += _0x39a27e.success;
        _0x3ac137 += _0x39a27e.totalReward;
      });
    });
    const _0x173b7e = _0x1105e0 > 0 ? (_0x322d4e / _0x1105e0 * 100).toFixed(1) : "0.0",
      _0x2e26ca = _0x33e5b3.filter(_0x5b0851 => _0x5b0851.coinLimitExceeded).length;
    let _0x5ab3f0 = "\n      <h2>任务完成</h2>\n      <hr>\n      <h3>📊 总体数据</h3>\n      <ul>\n        <li><b>总账号数：</b>" + _0x33e5b3.length + "个</li>\n        <li><b>超限账号：</b>" + _0x2e26ca + "个</li>\n        <li><b>总任务数：</b>" + _0x1105e0 + "次</li>\n        <li><b>任务成功率：</b>" + _0x173b7e + "%</li>\n      </ul>\n      <h3>💰 金币与余额</h3>\n      <ul>\n        <li><b>总金币变化：</b>" + (_0xc3c692 > 0 ? "+" : "") + _0xc3c692 + "</li>\n        <li><b>总金币奖励：</b>" + _0x3ac137 + "</li>\n        <li><b>总余额变化：</b>" + (_0x3b0274 > 0 ? "+" : "") + _0x3b0274.toFixed(2) + "元</li>\n      </ul>\n      <h3>📝 账号明细</h3>\n      <table border=\"1\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-collapse: collapse; width: 100%; color: #000000;\">\n        <tr style=\"background-color: #f0f0f0; color: #000000;\">\n          <th style=\"color: #000000;\">序号</th>\n          <th style=\"color: #000000;\">账号</th>\n          <th style=\"color: #000000;\">金币变化</th>\n          <th style=\"color: #000000;\">余额变化</th>\n          <th style=\"color: #000000;\">状态</th>\n        </tr>\n    ";
    _0x33e5b3.forEach(_0x381b18 => {
      const _0xc6ece5 = _0x381b18.coinLimitExceeded ? "超限" : "完成",
        _0x5dcecd = _0x381b18.coinChange >= 0 ? "+" + _0x381b18.coinChange : _0x381b18.coinChange,
        _0x296c64 = _0x381b18.cashChange >= 0 ? "+" + _0x381b18.cashChange.toFixed(2) : _0x381b18.cashChange.toFixed(2),
        _0x597c9f = _0x381b18.coinLimitExceeded ? "#fffacd" : _0x381b18.coinChange > 0 ? "#ddffdd" : "#ffffff";
      _0x5ab3f0 += "\n        <tr style=\"background-color: " + _0x597c9f + "; color: #000000;\">\n          <td style=\"color: #000000;\">" + _0x381b18.index + "</td>\n          <td style=\"color: #000000;\">" + _0x381b18.nickname + "</td>\n          <td style=\"color: #000000;\">" + _0x5dcecd + "</td>\n          <td style=\"color: #000000;\">" + _0x296c64 + "元</td>\n          <td style=\"color: #000000;\">" + _0xc6ece5 + "</td>\n        </tr>\n      ";
    });
    _0x5ab3f0 += "\n      </table>\n      <hr>\n      <p><small>执行时间: " + new Date().toLocaleString("zh-CN", {
      "timeZone": "Asia/Shanghai"
    }) + "</small></p>\n    ";
    await _0x3eeaf8("任务完成", _0x5ab3f0);
  }
  if (_0x3e1b2d) {
    clearInterval(_0x3e1b2d);
  }
  process.exit(0);
}
function _0x541f2e() {
  try {
    const _0x14de20 = _0xfd629c => {
        {
          const _0x140e23 = "0123456789abcdef";
          let _0x926240 = "";
          for (let _0x2a9960 = 0; _0x2a9960 < _0xfd629c; _0x2a9960++) {
            _0x926240 += _0x140e23.charAt(Math.floor(Math.random() * _0x140e23.length));
          }
          return _0x926240;
        }
      },
      _0x315263 = _0x14de20(16),
      _0x4cc3c4 = "ANDROID_" + _0x315263;
    return _0x4cc3c4;
  } catch (_0x3ae94d) {
    {
      console.log("生成did失败: " + _0x3ae94d.message);
      const _0x413ac6 = Date.now().toString(16).toUpperCase();
      return "ANDROID_" + _0x413ac6.substring(0, 16);
    }
  }
}
async function _0xf82e1c(_0xb867d9, _0x453c3f = null, _0x2841ff = "Unknown Request") {
  const _0x14681a = {
    ..._0xb867d9
  };
  let _0x45b430 = null;
  if (_0x453c3f) {
    try {
      _0x45b430 = new _0x40c766(_0x453c3f);
    } catch (_0x3d51d9) {
      console.log(_0x2841ff + " 代理配置错误: " + _0x3d51d9.message + "，使用直连");
      console.log("   代理URL: " + _0x453c3f);
    }
  }
  try {
    {
      let _0x4be18e = _0x14681a.body;
      _0x14681a.form && (_0x4be18e = _0x2a9222.stringify(_0x14681a.form));
      const _0x472944 = {
          "method": _0x14681a.method || "GET",
          "url": _0x14681a.url,
          "headers": _0x14681a.headers || {},
          "data": _0x4be18e,
          "timeout": _0x14681a.timeout || 30000,
          "validateStatus": () => true,
          ...(_0x45b430 && {
            "httpAgent": _0x45b430,
            "httpsAgent": _0x45b430
          })
        },
        _0x58e87f = await _0x479029(_0x472944);
      return {
        "response": _0x58e87f,
        "body": _0x58e87f.data
      };
    }
  } catch (_0x342f6a) {
    if (_0x45b430 && (_0x342f6a.code === "ECONNREFUSED" || _0x342f6a.code === "ETIMEDOUT" || _0x342f6a.message.includes("Proxy"))) {
      {
        _0x83db87 && console.log(_0x2841ff + " 代理连接失败，尝试直连: " + _0x342f6a.message);
        try {
          {
            let _0x4b9b7c = _0x14681a.body;
            _0x14681a.form && (_0x4b9b7c = _0x2a9222.stringify(_0x14681a.form));
            const _0x2857f3 = {
                "method": _0x14681a.method || "GET",
                "url": _0x14681a.url,
                "headers": _0x14681a.headers || {},
                "data": _0x4b9b7c,
                "timeout": _0x14681a.timeout || 30000,
                "validateStatus": () => true
              },
              _0x17a116 = await _0x479029(_0x2857f3);
            return {
              "response": _0x17a116,
              "body": _0x17a116.data
            };
          }
        } catch (_0xe8bed0) {
          _0x83db87 && console.log(_0x2841ff + " 直连也失败: " + _0xe8bed0.message);
          return {
            "response": null,
            "body": null
          };
        }
      }
    }
    if (_0x83db87) {
      console.log(_0x2841ff + " 请求失败: " + _0x342f6a.message);
    }
    return {
      "response": null,
      "body": null
    };
  }
}
async function _0x1dc115(_0x28fcf3, _0x1c729c = "代理连通性检测") {
  if (!_0x28fcf3) return {
    "ok": true,
    "msg": "未配置代理（直连模式）",
    "ip": "localhost"
  };
  const _0x1f2784 = ["https://httpbin.org/ip", "https://api.ipify.org?format=json", "https://www.baidu.com"];
  let _0xb5bde5 = null;
  for (const _0xa570f2 of _0x1f2784) {
    try {
      {
        const {
          response: _0x1c36d7,
          body: _0x4d55f9
        } = await _0xf82e1c({
          "method": "GET",
          "url": _0xa570f2,
          "headers": {
            "User-Agent": "Mozilla/5.0"
          },
          "timeout": 15000
        }, _0x28fcf3, _0x1c729c);
        if (_0x4d55f9) {
          {
            const _0x3bbdab = _0x4d55f9.origin || _0x4d55f9.ip || "未知";
            return {
              "ok": true,
              "msg": "代理连接正常，出口IP: " + _0x3bbdab,
              "ip": _0x3bbdab
            };
          }
        }
      }
    } catch (_0x584223) {
      _0xb5bde5 = _0x584223;
      continue;
    }
  }
  if (_0xb5bde5) return {
    "ok": false,
    "msg": "代理测试失败：" + _0xb5bde5.message,
    "ip": "unknown"
  };else {
    return {
      "ok": false,
      "msg": "代理测试失败：所有测试URL均无响应",
      "ip": "unknown"
    };
  }
}
const _0x420d43 = new Set();
async function _0x5ac494(_0x2105f6, _0x38b63a, _0x5ddccf = "?") {
  const _0x2eeaf4 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    {
      body: _0x584c96
    } = await _0xf82e1c({
      "method": "GET",
      "url": _0x2eeaf4,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x2105f6,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x38b63a, "获取账号基本信息");
  if (_0x584c96 && _0x584c96.result === 1 && _0x584c96.data) return {
    "nickname": _0x584c96.data.userData?.["nickname"] || null,
    "totalCoin": _0x584c96.data.totalCoin ?? null,
    "allCash": _0x584c96.data.allCash ?? null
  };
  return null;
}
class _0x430874 {
  constructor({
    index: _0x107479,
    salt: _0x15e25d,
    cookie: _0xcd05c2,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look"],
    remark = ""
  }) {
    this.index = _0x107479;
    this.salt = _0x15e25d;
    this.cookie = _0xcd05c2;
    this.nickname = nickname || remark || "账号" + _0x107479;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = _0x146e4d;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 14; V2207A Build/UP1A.231005.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/131.0.6778.135 Mobile Safari/537.36 Yoda/3.1.7-rc1 ksNebula/13.1.40.9558",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=vivo(V2207A)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    this.tasksToExecute.forEach(_0x4b6231 => {
      this.taskConfigs[_0x4b6231] && (this.taskStats[_0x4b6231] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      });
    });
    this.sessionTotalReward = 0;
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = _0x5d71d2;
    this.lowRewardLimit = _0x3d97cc;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x1b4882 => {
      this.taskConfigs[_0x1b4882] && (this.taskLimitReached[_0x1b4882] = false);
    });
  }
  async ["checkCoinLimit"]() {
    try {
      {
        const _0x25c26e = await _0x5ac494(this.cookie, this.proxyUrl, this.index);
        if (_0x25c26e && _0x25c26e.totalCoin) {
          {
            const _0x202645 = parseInt(_0x25c26e.totalCoin);
            if (_0x202645 >= this.coinLimit) {
              console.log(this.getAccountDisplayName() + " 金币已达 " + _0x202645 + "，超过阈值 " + this.coinLimit + "，停止任务");
              this.coinExceeded = true;
              this.stopAllTasks = true;
              return true;
            }
          }
        }
        return false;
      }
    } catch (_0x4e2d50) {
      console.log(this.getAccountDisplayName() + " 金币检查异常: " + _0x4e2d50.message);
      return false;
    }
  }
  ["getAccountDisplayName"]() {
    if (this.remark) return "账号[" + this.index + "](" + this.remark + ")";
    const _0x5c1600 = this.nickname && this.nickname !== "账号" + this.index ? this.nickname : "";
    return "账号[" + this.index + "]" + (_0x5c1600 ? "(" + _0x5c1600 + ")" : "");
  }
  ["extractCookieInfo"]() {
    try {
      {
        const _0xcfbca6 = this.cookie.match(/egid=([^;]+)/),
          _0x5c8dd8 = this.cookie.match(/did=([^;]+)/),
          _0x320c1f = this.cookie.match(/userId=([^;]+)/),
          _0x3a98b2 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
          _0x4d7fb3 = this.cookie.match(/appver=([^;]+)/);
        this.egid = _0xcfbca6 ? _0xcfbca6[1] : "";
        this.did = _0x5c8dd8 ? _0x5c8dd8[1] : "";
        this.userId = _0x320c1f ? _0x320c1f[1] : "";
        this.kuaishouApiSt = _0x3a98b2 ? _0x3a98b2[1] : "";
        this.appver = _0x4d7fb3 ? _0x4d7fb3[1] : "13.7.20.10468";
        if (!this.egid || !this.did) {
          console.log(this.getAccountDisplayName() + " cookie格式可能无egid或did，继续尝试...");
        }
      }
    } catch (_0x529008) {
      console.log(this.getAccountDisplayName() + " 解析cookie失败: " + _0x529008.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n" + this.getAccountDisplayName() + " 任务统计:");
    for (const [_0x1ad405, _0xd3dba0] of Object.entries(this.taskStats)) {
      {
        const _0x30903d = this.taskConfigs[_0x1ad405].name;
        console.log("   " + _0x30903d + ": 成功" + _0xd3dba0.success + "次, 失败" + _0xd3dba0.failed + "次, 奖励" + _0xd3dba0.totalReward + "金币");
      }
    }
  }
  async ["retryOperation"](_0x23b0bb, _0x1fb05a, _0x48186c = 3, _0x1d3db2 = 2000) {
    let _0x535579 = 0,
      _0x5a2d8a = null;
    while (_0x535579 < _0x48186c) {
      try {
        const _0x139af7 = await _0x23b0bb();
        if (_0x139af7) return _0x139af7;
        _0x5a2d8a = new Error(_0x1fb05a + " 返回空结果");
      } catch (_0x5415bb) {
        _0x5a2d8a = _0x5415bb;
      }
      _0x535579++;
      _0x535579 < _0x48186c && (console.log(" " + this.getAccountDisplayName() + " " + _0x1fb05a + " 失败，重试 " + _0x535579 + "/" + _0x48186c), await new Promise(_0x54517e => setTimeout(_0x54517e, _0x1d3db2)));
    }
    return null;
  }
  async ["getAdInfo"](_0x36e32e) {
    try {
      {
        const _0x124277 = "/rest/e/reward/mixed/ad",
          _0x558128 = {
            "encData": "|encData|",
            "sign": "|sign|",
            "cs": "false",
            "client_key": "2ac2a76d",
            "videoModelCrowdTag": "1_23",
            "os": "android",
            "kuaishou.api_st": this.kuaishouApiSt,
            "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
          },
          _0x4eb0aa = {
            "earphoneMode": "1",
            "mod": "vivo(V2207A)",
            "appver": this.appver,
            "isp": "CMCC",
            "language": "zh-cn",
            "ud": this.userId,
            "did_tag": "0",
            "net": "WIFI",
            "kcv": "1599",
            "app": "0",
            "kpf": "ANDROID_PHONE",
            "ver": "13.1",
            "android_os": "0",
            "boardPlatform": "mt6895",
            "kpn": "NEBULA",
            "androidApiLevel": "34",
            "country_code": "cn",
            "sys": "ANDROID_14",
            "sw": "1080",
            "sh": "2376",
            "abi": "arm64",
            "userRecoBit": "0"
          },
          _0x4d0f19 = {
            "appInfo": {
              "appId": "kuaishou_nebula",
              "name": "快手极速版",
              "packageName": "com.kuaishou.nebula",
              "version": this.appver,
              "versionCode": -1
            },
            "deviceInfo": {
              "osType": 1,
              "osVersion": "14",
              "deviceId": this.did,
              "screenSize": {
                "width": 1080,
                "height": 2376
              },
              "ftt": ""
            },
            "userInfo": {
              "userId": this.userId,
              "age": 0,
              "gender": ""
            },
            "impInfo": [{
              "pageId": 11101,
              "subPageId": _0x36e32e.subPageId,
              "action": 0,
              "browseType": 3,
              "impExtData": "{}",
              "mediaExtData": "{}"
            }]
          },
          _0x13adb5 = Buffer.from(JSON.stringify(_0x4d0f19)).toString("base64");
        let _0x3844ee = await this.getSign(_0x13adb5);
        if (!_0x3844ee) {
          console.log("[x] " + this.getAccountDisplayName() + " 获取encSign失败");
          return null;
        }
        _0x558128.encData = _0x3844ee.encdata;
        _0x558128.sign = _0x3844ee.sign;
        let _0x397bc5 = await this.requestSignService({
          "urlpath": _0x124277,
          "reqdata": _0x2a9222.stringify(_0x558128) + "&" + _0x2a9222.stringify(_0x4eb0aa),
          "api_client_salt": this.salt
        });
        if (!_0x397bc5) return console.log("[x] " + this.getAccountDisplayName() + " 获取nesig失败"), null;
        const _0x30879b = {
            ..._0x4eb0aa,
            "sig": _0x397bc5.sig,
            "__NS_sig3": _0x397bc5.__NS_sig3,
            "__NS_xfalcon": "",
            "__NStokensig": _0x397bc5.__NStokensig
          },
          _0x42a2f7 = "https://api.e.kuaishou.com" + _0x124277 + "?" + _0x2a9222.stringify(_0x30879b),
          {
            response: _0x48996c,
            body: _0x19144b
          } = await _0xf82e1c({
            "method": "POST",
            "url": _0x42a2f7,
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
            },
            "form": _0x558128,
            "timeout": 12000
          }, this.proxyUrl, this.getAccountDisplayName() + " 获取广告");
        if (!_0x19144b) {
          console.log("[x] " + this.getAccountDisplayName() + " 广告接口返回为空");
          return null;
        }
        if (_0x19144b.errorMsg === "OK" && _0x19144b.feeds && _0x19144b.feeds[0] && _0x19144b.feeds[0].ad) {
          const _0x315ab6 = _0x19144b.feeds[0].caption || _0x19144b.feeds[0].ad?.["caption"] || "",
            _0x21b5b7 = _0x19144b.feeds[0].exp_tag || "",
            _0x256b95 = _0x21b5b7.split("/")[1]?.["split"]("_")?.[0] || "";
          return {
            "cid": _0x19144b.feeds[0].ad.creativeId,
            "llsid": _0x256b95
          };
        }
        if (_0x19144b.errorMsg) {
          console.log(" " + this.getAccountDisplayName() + " 广告接口错误: " + _0x19144b.errorMsg);
        } else console.log(" " + this.getAccountDisplayName() + " 广告接口返回数据格式异常");
        return null;
      }
    } catch (_0x33737c) {
      console.log("[x] " + this.getAccountDisplayName() + " 获取广告异常: " + _0x33737c.message);
      return null;
    }
  }
  async ["generateSignature"](_0x4a8cd7, _0x9f7087, _0xeeb725, _0x583850) {
    try {
      {
        const _0x1ee2d4 = JSON.stringify({
            "businessId": _0x583850.businessId,
            "endTime": this.endTime,
            "extParams": "",
            "mediaScene": "video",
            "neoInfos": [{
              "creativeId": _0x4a8cd7,
              "extInfo": "",
              "llsid": _0x9f7087,
              "requestSceneType": _0x583850.requestSceneType,
              "taskType": _0x583850.taskType,
              "watchExpId": "",
              "watchStage": 0
            }],
            "pageId": 11101,
            "posId": _0x583850.posId,
            "reportType": 0,
            "sessionId": "",
            "startTime": this.startTime,
            "subPageId": _0x583850.subPageId
          }),
          _0x27482f = "bizStr=" + encodeURIComponent(_0x1ee2d4) + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + this.kuaishouApiSt,
          _0x3ede6e = this.queryParams + "&" + _0x27482f,
          _0x9c3913 = await this.requestSignService({
            "urlpath": this.taskReportPath,
            "reqdata": _0x3ede6e,
            "api_client_salt": this.salt
          }, this.getAccountDisplayName() + " 生成报告签名");
        if (!_0x9c3913) return console.log("[x] " + this.getAccountDisplayName() + " 报告签名获取失败"), null;
        return {
          "sig": _0x9c3913.sig,
          "sig3": _0x9c3913.__NS_sig3,
          "sigtoken": _0x9c3913.__NStokensig,
          "post": _0x27482f
        };
      }
    } catch (_0x3e4671) {
      console.log("[x] " + this.getAccountDisplayName() + " 生成签名异常: " + _0x3e4671.message);
      return null;
    }
  }
  async ["getSign"](_0x3579c2) {
    const _0x596699 = await _0x14d423(),
      _0x2ff302 = Math.floor(Date.now() / 1000).toString(),
      _0xd73153 = "encsign",
      _0x5bfc1b = _0x58b9cb.createHash("md5").update(_0xd73153 + _0x3579c2 + _0x2ff302 + _0xd00594).digest("hex");
    for (const _0x384c34 of _0x596699) {
      try {
        {
          const {
            response: _0x403f9c,
            body: _0x2373d0
          } = await _0xf82e1c({
            "method": "POST",
            "url": _0x384c34,
            "form": {
              "action": _0xd73153,
              "data": _0x3579c2,
              "timestamp": _0x2ff302,
              "sign": _0x5bfc1b
            },
            "headers": {
              "User-Agent": "Mozilla/5.0",
              "Accept": "*/*"
            },
            "timeout": 30000
          }, null, this.getAccountDisplayName() + " 获取encsign");
          let _0x20751a = _0x2373d0;
          if (_0x2373d0 && _0x2373d0.encrypted === true && _0x2373d0.data) {
            {
              _0x20751a = _0x2f7fc0(_0x2373d0.data, _0x31b84e);
              if (!_0x20751a) {
                {
                  console.log(" " + this.getAccountDisplayName() + " encsign解密失败");
                  continue;
                }
              }
            }
          }
          if (_0x20751a && _0x20751a.status === true) return _0x20751a.data;else {
            if (_0x20751a) {
              {
                const _0x205515 = _0x20751a.error === "IP_BLACKLISTED" || _0x20751a.error === "BLACKLISTED" || _0x20751a.message && (_0x20751a.message.includes("黑名单") || _0x20751a.message.includes("拉黑")) || _0x403f9c && _0x403f9c.status === 403;
                if (_0x205515) {
                  {
                    _0x7a412c++;
                    console.log("⚠️ " + this.getAccountDisplayName() + " 被黑名单拦截，当前累计次数: " + _0x7a412c + "/" + _0x5e589c);
                    if (_0x7a412c >= _0x5e589c) {
                      console.log("\n" + "=".repeat(80));
                      console.log("❌ 被黑名单拦截次数已达到 " + _0x5e589c + " 次，强制停止脚本！");
                      console.log("=".repeat(80) + "\n");
                      _0x2f18af = true;
                      typeof this !== "undefined" && this.stopAllTasks !== undefined && (this.stopAllTasks = true);
                      setTimeout(() => {
                        process.exit(1);
                      }, 1000);
                      return null;
                    }
                  }
                }
                console.log(" " + this.getAccountDisplayName() + " encsign返回错误: " + (_0x20751a.message || _0x20751a.error || JSON.stringify(_0x20751a)));
              }
            } else {
              console.log(" " + this.getAccountDisplayName() + " encsign返回为空");
            }
          }
        }
      } catch (_0x5d22d1) {
        console.log(" " + this.getAccountDisplayName() + " encsign请求异常: " + _0x5d22d1.message);
      }
    }
    console.log("[x] " + this.getAccountDisplayName() + " 所有encsign API都失败了");
    return null;
  }
  async ["requestSignService"](_0x32720a, _0x4b9387 = "请求签名服务") {
    let _0x41aabc = {};
    const _0x17bacd = await _0x46536c(),
      _0x1dbc9b = Math.floor(Date.now() / 1000).toString(),
      _0x437d36 = "nssig",
      _0x24ce5c = _0x58b9cb.createHash("md5").update(_0x437d36 + _0x32720a.urlpath + _0x32720a.reqdata + _0x32720a.api_client_salt + _0x1dbc9b + _0xd00594).digest("hex");
    for (const _0x4b86b6 of _0x17bacd) {
      try {
        const {
          response: _0x5b4b6d,
          body: _0x48140d
        } = await _0xf82e1c({
          "method": "POST",
          "url": _0x4b86b6,
          "form": {
            "action": _0x437d36,
            "path": _0x32720a.urlpath,
            "data": _0x32720a.reqdata,
            "salt": _0x32720a.api_client_salt,
            "timestamp": _0x1dbc9b,
            "sign": _0x24ce5c
          },
          "headers": {
            "User-Agent": "Mozilla/5.0",
            "Accept": "*/*"
          },
          "timeout": 30000
        }, null, _0x4b9387);
        let _0x7f667e = _0x48140d;
        if (_0x48140d && _0x48140d.encrypted === true && _0x48140d.data) {
          {
            _0x7f667e = _0x2f7fc0(_0x48140d.data, _0x31b84e);
            if (!_0x7f667e) {
              {
                console.log(" " + _0x4b9387 + " nssig解密失败");
                continue;
              }
            }
          }
        }
        if (_0x7f667e && _0x7f667e.data) {
          let _0x5147c0 = _0x7f667e.data.nssig3,
            _0x476f36 = _0x7f667e.data.nstokensig;
          Object.assign(_0x41aabc, {
            "__NS_sig3": _0x5147c0,
            "__NStokensig": _0x476f36,
            "sig": _0x7f667e.data.sig
          });
          return _0x41aabc;
        } else {
          if (_0x7f667e) {
            {
              const _0x18e857 = _0x7f667e.error === "IP_BLACKLISTED" || _0x7f667e.error === "BLACKLISTED" || _0x7f667e.message && (_0x7f667e.message.includes("黑名单") || _0x7f667e.message.includes("拉黑")) || _0x5b4b6d && _0x5b4b6d.status === 403;
              if (_0x18e857) {
                {
                  _0x7a412c++;
                  console.log("⚠️ " + _0x4b9387 + " 被黑名单拦截，当前累计次数: " + _0x7a412c + "/" + _0x5e589c);
                  if (_0x7a412c >= _0x5e589c) return console.log("\n" + "=".repeat(80)), console.log("❌ 被黑名单拦截次数已达到 " + _0x5e589c + " 次，强制停止脚本！"), console.log("=".repeat(80) + "\n"), _0x2f18af = true, typeof this !== "undefined" && this.stopAllTasks !== undefined && (this.stopAllTasks = true), setTimeout(() => {
                    process.exit(1);
                  }, 1000), null;
                }
              }
              console.log(" " + _0x4b9387 + " nssig返回错误: " + (_0x7f667e.message || _0x7f667e.error || JSON.stringify(_0x7f667e)));
            }
          }
        }
      } catch (_0xd4da32) {
        console.log(" " + _0x4b9387 + " nssig请求异常: " + _0xd4da32.message);
      }
    }
    console.log("[x] " + _0x4b9387 + " 所有nssig API都失败了");
    return null;
  }
  async ["submitReport"](_0x11f7fd, _0x198ded, _0x5f13f7, _0xc03bfb, _0x19f5d0, _0x397c6c) {
    try {
      const _0xe5318 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x11f7fd + "&__NS_sig3=" + _0x198ded + "&__NS_xfalcon=&__NStokensig=" + _0x5f13f7),
        {
          response: _0x3d44ba,
          body: _0x3be845
        } = await _0xf82e1c({
          "method": "POST",
          "url": _0xe5318,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0"
          },
          "body": _0xc03bfb,
          "timeout": 12000
        }, this.proxyUrl, this.getAccountDisplayName() + " 提交任务");
      if (!_0x3be845) return {
        "success": false,
        "reward": 0
      };
      if (_0x3be845.result === 1) {
        const _0x1f41bd = _0x3be845.data?.["neoAmount"] || 0;
        this.sessionTotalReward += _0x1f41bd;
        console.log("获取到广告 ==> 预计奖励[" + _0x1f41bd + "]金币，目前已获[" + this.sessionTotalReward + "]金币");
        _0x1f41bd <= this.lowRewardThreshold ? (this.lowRewardStreak++, this.did = _0x541f2e(), console.log(" " + this.getAccountDisplayName() + " 金币奖励(" + _0x1f41bd + ")低于阈值，当前连续低奖励次数：" + this.lowRewardStreak + "/" + this.lowRewardLimit), this.lowRewardStreak >= this.lowRewardLimit && (console.log(" " + this.getAccountDisplayName() + " 连续" + this.lowRewardLimit + "次低奖励，停止全部任务"), this.stopAllTasks = true)) : this.lowRewardStreak = 0;
        return {
          "success": true,
          "reward": _0x1f41bd
        };
      }
      if ([20107, 20108, 1003, 415].includes(_0x3be845.result)) return console.log(" " + this.getAccountDisplayName() + " " + _0x397c6c.name + " 已达上限"), this.taskLimitReached[_0x19f5d0] = true, {
        "success": false,
        "reward": 0
      };
      console.log("[x] " + this.getAccountDisplayName() + " " + _0x397c6c.name + " 奖励失败");
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0x1b1c8b) {
      console.log("[x] " + this.getAccountDisplayName() + " 提交任务异常: " + _0x1b1c8b.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["executeTask"](_0x3f233d) {
    const _0x18352a = this.taskConfigs[_0x3f233d];
    if (!_0x18352a) {
      console.log("[x] " + this.getAccountDisplayName() + " 未知任务: " + _0x3f233d);
      return false;
    }
    if (this.taskLimitReached[_0x3f233d] || _0x2f18af) return false;
    try {
      const _0x283e4c = await this.retryOperation(() => this.getAdInfo(_0x18352a), "获取" + _0x18352a.name + "信息", 3);
      if (!_0x283e4c) {
        this.taskStats[_0x3f233d].failed++;
        _0x4cc20a++;
        console.log("⚠️ " + this.getAccountDisplayName() + " 获取失败，当前累计失败次数: " + _0x4cc20a + "/" + _0x4456e8);
        if (_0x4cc20a >= _0x4456e8) {
          console.log("\n" + "=".repeat(80));
          console.log("❌ 获取失败次数已达到 " + _0x4456e8 + " 次，强制停止脚本！");
          console.log("=".repeat(80) + "\n");
          _0x2f18af = true;
          typeof this !== "undefined" && this.stopAllTasks !== undefined && (this.stopAllTasks = true);
          setTimeout(() => {
            process.exit(1);
          }, 1000);
          return false;
        }
        return false;
      }
      const _0x54caf6 = Math.floor(Math.random() * 10000) + 30000;
      console.log("观看广告中... " + Math.round(_0x54caf6 / 1000) + "秒");
      await new Promise(_0x4ec79f => setTimeout(_0x4ec79f, _0x54caf6));
      const _0x1ee061 = await this.retryOperation(() => this.generateSignature(_0x283e4c.cid, _0x283e4c.llsid, _0x3f233d, _0x18352a), "生成" + _0x18352a.name + "签名", 3);
      if (!_0x1ee061) return this.taskStats[_0x3f233d].failed++, false;
      const _0x567417 = await this.retryOperation(() => this.submitReport(_0x1ee061.sig, _0x1ee061.sig3, _0x1ee061.sigtoken, _0x1ee061.post, _0x3f233d, _0x18352a), "提交" + _0x18352a.name + "报告", 3);
      if (_0x567417?.["success"]) {
        this.taskStats[_0x3f233d].success++;
        this.taskStats[_0x3f233d].totalReward += _0x567417.reward || 0;
        return true;
      }
      this.taskStats[_0x3f233d].failed++;
      return false;
    } catch (_0xec6ae8) {
      console.log("[x] " + this.getAccountDisplayName() + " 任务异常(" + _0x3f233d + "): " + _0xec6ae8.message);
      this.taskStats[_0x3f233d].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0xb96038 = {},
      _0x230c6e = 10;
    for (const _0x12321e of this.tasksToExecute) {
      {
        if (this.stopAllTasks || _0x2f18af) {
          break;
        }
        if (!this.taskConfigs[_0x12321e]) {
          console.log(" " + this.getAccountDisplayName() + " 跳过未知任务: " + _0x12321e);
          continue;
        }
        console.log(" " + this.getAccountDisplayName() + " 开始任务：" + this.taskConfigs[_0x12321e].name + "（执行" + _0x230c6e + "个）");
        let _0x5e51fe = false;
        for (let _0x541e3d = 0; _0x541e3d < _0x230c6e; _0x541e3d++) {
          if (this.stopAllTasks || this.taskLimitReached[_0x12321e] || _0x2f18af) {
            {
              _0x2f18af && console.log("    检测到卡密失效，停止任务");
              break;
            }
          }
          console.log("   [" + (_0x541e3d + 1) + "/" + _0x230c6e + "] " + this.taskConfigs[_0x12321e].name);
          const _0x3f0218 = await this.executeTask(_0x12321e);
          _0x3f0218 && (_0x5e51fe = true);
          if (_0x541e3d < _0x230c6e - 1 && !this.stopAllTasks) {
            const _0xc9ac85 = 20000 + Math.floor(Math.random() * 40000);
            console.log("    等待 " + (_0xc9ac85 / 1000).toFixed(1) + "秒...");
            await new Promise(_0x489ed5 => setTimeout(_0x489ed5, _0xc9ac85));
          }
        }
        _0xb96038[_0x12321e] = _0x5e51fe;
        if (this.stopAllTasks) {
          break;
        }
        if (_0x12321e !== this.tasksToExecute[this.tasksToExecute.length - 1]) {
          const _0x1fd9fa = 20000 + Math.floor(Math.random() * 40000);
          console.log(" " + this.getAccountDisplayName() + " 等待 " + (_0x1fd9fa / 1000).toFixed(1) + "秒进入下一任务");
          await new Promise(_0x5f1192 => setTimeout(_0x5f1192, _0x1fd9fa));
        }
      }
    }
    return _0xb96038;
  }
}
function _0x492041(_0x42d926) {
  const _0x514aba = String(_0x42d926 || "").trim().split("#"),
    _0x4b4f2b = (_0x24519d, _0xa65ce1 = 50) => {
      {
        if (_0x24519d.length <= _0xa65ce1) return _0x24519d;
        return _0x24519d.substring(0, _0xa65ce1) + "...";
      }
    };
  if (_0x514aba.length < 2 || _0x514aba.length > 4) {
    const _0x3b873c = _0x4b4f2b(_0x42d926, 80);
    console.log(" 账号配置格式错误（需要2-4段）：" + _0x3b873c);
    return null;
  }
  let _0x56b317, _0x2ed33b, _0x18df63, _0x1ffe1d;
  if (_0x514aba.length === 2) _0x56b317 = "", _0x2ed33b = _0x514aba[0].trim(), _0x18df63 = _0x514aba[1].trim(), _0x1ffe1d = "";else {
    if (_0x514aba.length === 3) {
      const _0x1aeb59 = _0x514aba[2].trim(),
        _0x2f072b = (_0x1aeb59.includes(":") || _0x1aeb59.includes("|") || /^socks5:\/\//i.test(_0x1aeb59)) && _0x1aeb59 !== "0";
      if (_0x2f072b) {
        _0x56b317 = "";
        _0x2ed33b = _0x514aba[0].trim();
        _0x18df63 = _0x514aba[1].trim();
        _0x1ffe1d = _0x514aba[2].trim();
      } else _0x56b317 = _0x514aba[0].trim(), _0x2ed33b = _0x514aba[1].trim(), _0x18df63 = _0x514aba[2].trim(), _0x1ffe1d = "";
    } else _0x56b317 = _0x514aba[0].trim(), _0x2ed33b = _0x514aba[1].trim(), _0x18df63 = _0x514aba[2].trim(), _0x1ffe1d = _0x514aba[3].trim();
  }
  if (!_0x2ed33b || !_0x18df63) {
    {
      const _0x2c3ee6 = _0x56b317 + "#" + _0x4b4f2b(_0x2ed33b) + "#" + _0x18df63 + "#" + _0x1ffe1d;
      console.log(" cookie或salt为空：" + _0x2c3ee6);
      return null;
    }
  }
  let _0x2b209a = null;
  if (_0x1ffe1d && _0x1ffe1d !== "" && _0x1ffe1d !== "null" && _0x1ffe1d !== "0") {
    if (/^socks5:\/\//i.test(_0x1ffe1d)) _0x2b209a = _0x1ffe1d, _0x83db87 && console.log(" [" + _0x56b317 + "] 代理配置：" + _0x2b209a);else {
      if (_0x1ffe1d.includes("|")) {
        {
          const _0x432436 = _0x1ffe1d.split("|");
          if (_0x432436.length >= 2) {
            const [_0xd6d05, _0x2d0d08, _0x6e4ac7, _0x401ffc] = _0x432436;
            if (_0x6e4ac7 && _0x401ffc) _0x2b209a = "socks5://" + _0x6e4ac7 + ":" + _0x401ffc + "@" + _0xd6d05 + ":" + _0x2d0d08;else {
              _0x2b209a = "socks5://" + _0xd6d05 + ":" + _0x2d0d08;
            }
            _0x83db87 && console.log(" [" + _0x56b317 + "] 代理配置：" + _0x2b209a);
          } else console.log(" [" + _0x56b317 + "] 代理格式错误（需要至少2段）：" + _0x1ffe1d);
        }
      } else {
        if (_0x1ffe1d.includes(":")) {
          _0x2b209a = "socks5://" + _0x1ffe1d;
          _0x83db87 && console.log(" [" + _0x56b317 + "] 代理配置：" + _0x2b209a);
        } else console.log(" [" + _0x56b317 + "] 代理格式无法识别（建议格式：ip:port），忽略：" + _0x1ffe1d);
      }
    }
  }
  return {
    "remark": _0x56b317 || "",
    "salt": _0x18df63,
    "cookie": _0x2ed33b,
    "proxyUrl": _0x2b209a
  };
}
function _0x59b878() {
  const _0x5c8a65 = _0x5cd72f(),
    _0x3b044e = _0x276dc4(),
    _0x1e2e12 = [];
  for (const _0x2bdadb of _0x5c8a65) {
    const _0x441002 = _0x492041(_0x2bdadb);
    _0x441002 && (_0x441002.tasksToExecute = _0x3b044e, _0x1e2e12.push(_0x441002));
  }
  _0x1e2e12.forEach((_0x85c2c1, _0x2dfdd4) => {
    _0x85c2c1.index = _0x2dfdd4 + 1;
  });
  return _0x1e2e12;
}
async function _0x595618(_0x1215ce, _0x47f07e, _0x966324) {
  const _0x1cef69 = new Array(_0x1215ce.length);
  let _0x4254a7 = 0;
  async function _0xdc201e() {
    while (true) {
      if (_0x2f18af) return;
      const _0x2820df = _0x4254a7++;
      if (_0x2820df >= _0x1215ce.length) return;
      const _0x4a9bb6 = _0x1215ce[_0x2820df];
      try {
        _0x1cef69[_0x2820df] = await _0x966324(_0x4a9bb6, _0x2820df);
      } catch (_0x3bb2a2) {
        console.log("[x] 并发执行异常（index=" + (_0x2820df + 1) + "）：" + _0x3bb2a2.message);
        _0x1cef69[_0x2820df] = null;
      }
    }
  }
  const _0x5316d4 = Array.from({
    "length": Math.min(_0x47f07e, _0x1215ce.length)
  }, _0xdc201e);
  await Promise.all(_0x5316d4);
  return _0x1cef69;
}
async function _0x2a6a16(_0x4ee9fe) {
  const _0x25ec6d = () => {
    return "账号[" + _0x4ee9fe.index + "]" + (_0x4ee9fe.remark ? "(" + _0x4ee9fe.remark + ")" : "");
  };
  let _0x10993a = false;
  if (_0x4ee9fe.proxyUrl) {
    {
      console.log(" " + _0x25ec6d() + " 测试代理连接中...");
      const _0xd3ccf7 = await _0x1dc115(_0x4ee9fe.proxyUrl, _0x25ec6d());
      console.log("   " + (_0xd3ccf7.ok ? "" : "[x]") + " " + _0xd3ccf7.msg);
      if (!_0xd3ccf7.ok || _0xd3ccf7.ip === "unknown") console.log(" " + _0x25ec6d() + " 代理测试失败，自动切换为直连模式"), _0x4ee9fe.proxyUrl = null, _0x10993a = false;else {
        console.log(" " + _0x25ec6d() + " 代理测试成功，将使用代理执行任务");
        _0x10993a = true;
      }
    }
  } else console.log(" " + _0x25ec6d() + " 未配置代理，使用直连");
  console.log(" " + _0x25ec6d() + " 获取账号信息中..." + (_0x10993a ? "(使用代理)" : "(直连)"));
  let _0x1e4877 = await _0x5ac494(_0x4ee9fe.cookie, _0x4ee9fe.proxyUrl, _0x4ee9fe.index),
    _0x1a3fda = _0x1e4877?.["nickname"] || "账号" + _0x4ee9fe.index;
  if (_0x1e4877) {
    const _0x168954 = _0x1e4877.totalCoin != null ? _0x1e4877.totalCoin : "未知",
      _0x875182 = _0x1e4877.allCash != null ? _0x1e4877.allCash : "未知";
    console.log(" " + _0x25ec6d() + " 登录成功，金币: " + _0x168954 + "，余额: " + _0x875182);
  } else {
    console.log("[x] " + _0x25ec6d() + " 基本信息获取失败，请检查：");
    console.log("   1. Cookie是否正确有效");
    console.log("   2. 代理是否可用（如配置了代理）");
    console.log("   3. 网络连接是否正常");
    console.log("   提示：将继续尝试执行任务...");
  }
  const _0x5df52e = new _0x430874({
    ..._0x4ee9fe,
    "nickname": _0x1a3fda,
    "tasksToExecute": _0x4ee9fe.tasksToExecute || ["food", "box", "look"]
  });
  await _0x5df52e.checkCoinLimit();
  if (_0x5df52e.coinExceeded) return console.log(" " + _0x25ec6d() + " 初始金币已超过阈值，不执行任务"), {
    "index": _0x4ee9fe.index,
    "remark": _0x4ee9fe.remark || "",
    "nickname": _0x1a3fda,
    "initialCoin": _0x1e4877?.["totalCoin"] || 0,
    "finalCoin": _0x1e4877?.["totalCoin"] || 0,
    "coinChange": 0,
    "initialCash": _0x1e4877?.["allCash"] || 0,
    "finalCash": _0x1e4877?.["allCash"] || 0,
    "cashChange": 0,
    "stats": _0x5df52e.getTaskStats(),
    "coinLimitExceeded": true
  };
  for (let _0x2edfd3 = 0; _0x2edfd3 < _0x5b8da8; _0x2edfd3++) {
    {
      if (_0x2f18af) {
        console.log(" " + _0x25ec6d() + " 检测到卡密失效，停止执行");
        break;
      }
      const _0x1cbb2d = 20000 + Math.floor(Math.random() * 40000);
      console.log(" " + _0x25ec6d() + " 第" + (_0x2edfd3 + 1) + "轮，等待 " + (_0x1cbb2d / 1000).toFixed(1) + "秒");
      console.log(" " + _0x25ec6d() + " 开始第" + (_0x2edfd3 + 1) + "轮任务");
      const _0x15d329 = 20000 + Math.floor(Math.random() * 40000);
      console.log(" " + _0x25ec6d() + " 准备中，等待 " + (_0x15d329 / 1000).toFixed(1) + "秒...");
      await new Promise(_0x3f127f => setTimeout(_0x3f127f, _0x15d329));
      if (_0x2f18af) {
        {
          console.log(" " + _0x25ec6d() + " 检测到卡密失效，停止执行");
          break;
        }
      }
      const _0x156d18 = await _0x5df52e.executeAllTasksByPriority();
      Object.values(_0x156d18).some(Boolean) ? console.log(" " + _0x25ec6d() + " 第" + (_0x2edfd3 + 1) + "轮执行完成") : console.log(" " + _0x25ec6d() + " 第" + (_0x2edfd3 + 1) + "轮没有成功任务");
      if (_0x5df52e.stopAllTasks) {
        console.log(" " + _0x25ec6d() + " 达到停止条件，终止后续轮次");
        break;
      }
      if (_0x2edfd3 < _0x5b8da8 - 1) {
        {
          const _0x4efed6 = 100000 + Math.floor(Math.random() * 200000);
          console.log(" " + _0x25ec6d() + " 等待 " + (_0x4efed6 / 1000).toFixed(1) + "秒进入下一轮");
          await new Promise(_0x221653 => setTimeout(_0x221653, _0x4efed6));
        }
      }
    }
  }
  const _0x2df494 = await _0x5ac494(_0x4ee9fe.cookie, _0x4ee9fe.proxyUrl, _0x4ee9fe.index),
    _0x5d2395 = _0x1e4877?.["totalCoin"] || 0,
    _0x33d192 = _0x2df494?.["totalCoin"] || 0,
    _0x5a68b5 = _0x33d192 - _0x5d2395,
    _0x1f86ae = _0x1e4877?.["allCash"] || 0,
    _0x1a3068 = _0x2df494?.["allCash"] || 0,
    _0x5050d5 = _0x1a3068 - _0x1f86ae;
  _0x5df52e.printTaskStats();
  return {
    "index": _0x4ee9fe.index,
    "remark": _0x4ee9fe.remark || "",
    "nickname": _0x1a3fda,
    "initialCoin": _0x5d2395,
    "finalCoin": _0x33d192,
    "coinChange": _0x5a68b5,
    "initialCash": _0x1f86ae,
    "finalCash": _0x1a3068,
    "cashChange": _0x5050d5,
    "stats": _0x5df52e.getTaskStats(),
    "coinLimitExceeded": _0x5df52e.coinExceeded
  };
}
function _0x5c22a8(_0x3bd783) {
  if (!_0x3bd783.length) {
    console.log("\n[x] 没有可显示的账号信息。");
    _0x3e1b2d && clearInterval(_0x3e1b2d);
    process.exit(1);
  }
  const _0x353fb6 = _0x3bd783.reduce((_0x2566d6, _0xc0493e) => _0x2566d6 + (parseInt(_0xc0493e.initialCoin) || 0), 0),
    _0xf9cc6c = _0x3bd783.reduce((_0x392df4, _0x30ae73) => _0x392df4 + (parseInt(_0x30ae73.finalCoin) || 0), 0),
    _0x5e0004 = _0xf9cc6c - _0x353fb6,
    _0x2e86fb = _0x3bd783.reduce((_0x12e7c9, _0x42d386) => _0x12e7c9 + (parseFloat(_0x42d386.initialCash) || 0), 0),
    _0x27ca7f = _0x3bd783.reduce((_0x2e40fe, _0x39f799) => _0x2e40fe + (parseFloat(_0x39f799.finalCash) || 0), 0),
    _0x2075e9 = _0x27ca7f - _0x2e86fb;
  let _0x545d62 = 0,
    _0x355262 = 0,
    _0x21097a = 0;
  _0x3bd783.forEach(_0x5c93d9 => {
    _0x5c93d9.stats && Object.values(_0x5c93d9.stats).forEach(_0x566482 => {
      _0x545d62 += _0x566482.success + _0x566482.failed;
      _0x355262 += _0x566482.success;
      _0x21097a += _0x566482.totalReward;
    });
  });
  const _0x1d4c04 = _0x545d62 > 0 ? (_0x355262 / _0x545d62 * 100).toFixed(1) : "0.0",
    _0x1a061c = _0x3bd783.filter(_0x2af9d7 => _0x2af9d7.coinLimitExceeded).length;
  console.log("\n" + "=".repeat(60));
  console.log(" 任务执行结果汇总");
  console.log("=".repeat(60));
  console.log(" 总账号数: " + _0x3bd783.length);
  console.log(" 超过金币阈值: " + _0x1a061c + "个");
  console.log(" 总任务数: " + _0x545d62 + " (成功率: " + _0x1d4c04 + "%)");
  console.log(" 总金币变化: " + (_0x5e0004 >= 0 ? "+" : "") + _0x5e0004);
  console.log(" 总金币奖励: " + _0x21097a);
  console.log(" 总余额变化: " + (_0x2075e9 >= 0 ? "+" : "") + _0x2075e9.toFixed(2));
  console.log("-".repeat(60));
  console.log("\n 账号详情:");
  console.log("序号".padEnd(6) + "备注".padEnd(16) + "昵称".padEnd(20) + "金币变化".padEnd(12) + "余额变化");
  console.log("-".repeat(60));
  _0x3bd783.forEach(_0x3bf739 => {
    const _0x472278 = _0x3bf739.coinChange >= 0 ? "+" + _0x3bf739.coinChange : "" + _0x3bf739.coinChange,
      _0x240707 = _0x3bf739.cashChange >= 0 ? "+" + _0x3bf739.cashChange.toFixed(2) : "" + _0x3bf739.cashChange.toFixed(2),
      _0xcae4bd = _0x3bf739.coinLimitExceeded ? " " : "";
    console.log(("" + _0x3bf739.index).padEnd(6) + ("" + _0x3bf739.remark).substring(0, 14).padEnd(16) + ("" + _0x3bf739.nickname + _0xcae4bd).substring(0, 18).padEnd(20) + _0x472278.padEnd(12) + _0x240707);
  });
  console.log("=".repeat(60));
  console.log(" 任务执行完成");
  console.log("=".repeat(60));
}
_0x1ca8f8().catch(_0x137d46 => {
  console.log("\n[x] 程序异常终止: " + _0x137d46.message);
  process.exit(1);
});