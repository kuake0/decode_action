import base64
import bz2
import zlib
import lzma
import gzip
from datetime import datetime
#from Crypto.Cipher import AES
#from cryptography.fernet import Fernet
#from Crypto.Cipher import ChaCha20
# 获取当前日期和时间
now = datetime.now()

# 将日期和时间格式化为字符串
formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")


def try_decompress(data):
    try:
        decompressed_data = gzip.decompress(data)
        return decompressed_data
    except Exception as e:
        pass
    # 尝试使用 bz2 解压缩
    try:
        decompressed_data = bz2.decompress(data)
        # print("使用 bz2 解压缩成功")
        return decompressed_data
    except Exception as e:
        pass
    # 尝试使用 zlib 解压缩
    try:
        decompressed_data = zlib.decompress(data)
        # print("使用 zlib 解压缩成功")
        return decompressed_data
    except Exception as e:
        pass
    # 尝试使用 lzma 解压缩
    try:
        decompressed_data = lzma.decompress(data)
        # print("使用 lzma 解压缩成功")
        return decompressed_data
    except Exception as e:
        pass
    # 如果无法解压缩，则返回原始数据
    return data


def try_decode_base64(data):
    try:
        decoded_data = base64.b64decode(data)
        # print("使用 base64 解码成功")
        return decoded_data
    except Exception as e:
        pass
    # 如果无法解码，则返回原始数据
    return data


def extract_base64_encoded(data):
    """从包含 base64.b64decode(...) 调用的文本中提取被引号包围的 base64 字符串。
    支持单引号或双引号，若未找到或格式不匹配返回 None。
    """
    if data is None:
        return None
    # 查找 base64.b64decode( 的起始位置
    start_idx = data.find("base64.b64decode(")
    if start_idx == -1:
        return None  # 如果未找到目标字符串，返回 None
    # 找到左括号位置
    paren_idx = data.find("(", start_idx)
    if paren_idx == -1:
        return None
    # 在左括号后查找第一个引号（单引号或双引号）
    single_idx = data.find("'", paren_idx + 1)
    double_idx = data.find('"', paren_idx + 1)
    # 选择最近的正向引号位置
    quote_idx = -1
    quote_char = None
    candidates = [(single_idx, "'"), (double_idx, '"')]
    for pos, ch in candidates:
        if pos != -1:
            if quote_idx == -1 or pos < quote_idx:
                quote_idx = pos
                quote_char = ch
    if quote_idx == -1:
        # 找不到引号，无法安全提取
        return None
    # 查找对应的闭合引号
    end_quote_idx = data.find(quote_char, quote_idx + 1)
    if end_quote_idx == -1:
        return None
    encoded_string = data[quote_idx + 1:end_quote_idx]
    return encoded_string


def Encoded_script_decode(data):

    return


def decrypt_nested(data):
    # 支持 None 输入并安全退出
    if data is None:
        print("未找到 base64 字符串，退出解密流程")
        return None

    while True:
        # data 可能是字符串（base64 文本）或 bytes
        # 先尝试把 data 作为 base64 字符串解码
        new_data = try_decode_base64(data)
        new_data = try_decompress(new_data)
        # 将 new_data 转为字符串以便文本匹配
        new_data_str = new_data if isinstance(new_data, str) else (new_data.decode('utf-8', errors='ignore') if isinstance(new_data, (bytes, bytearray)) else str(new_data))

        if "exec(" in new_data_str:
            if "Encoded script" in new_data_str:
                new_data = "该加密未适配 敬请期待"
                print("该加密未适配 敬请期待")
                break
            elif "exec(" in new_data_str:
                # 从 exec(...) 或类似输出中再次提取 base64 字符串
                next_encoded = extract_base64_encoded(new_data_str)
                if not next_encoded:
                    print("未能从解密结果中提取到新的 base64 字符串，退出")
                    break
                # 为下一轮解密更新 data（保持为字符串）
                data = next_encoded
                continue
            else:
                print("未知 加密 无法进一步解密")
                new_data = "未知 加密 无法进一步解密"
                break
        else:
            print("无法进一步解密，退出循环")
            break

    return new_data  # 返回最终解密后的数据


with open('./input.py', 'r', encoding='utf-8') as file:
    # 读取文件内容
    content = file.read().strip()
    # 打印内容
    encoded_data = extract_base64_encoded(content)
    # print(encoded_data)
# 解密嵌套加密数据
final_decrypted_data = decrypt_nested(encoded_data)
# 输出最终解密结果:
# print("最终解密结果:")
def process_data(data):
    if isinstance(data, str):
        # 如果是字符串，则编码为字节对象
        byte_data = data.encode('utf-8')
    elif isinstance(data, bytes):
        # 如果已经是字节对象，则直接使用
        byte_data = data
    else:
        # 如果不是字符串也不是字节对象，抛出异常或做其他处理
        raise TypeError("Expected string or bytes-like object")
    return byte_data

print(final_decrypted_data)
with open("./output.py", 'wb') as f:
    f.write(process_data("#")+process_data(formatted_date)+process_data("\n")+process_data(final_decrypted_data))
