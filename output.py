#2025-07-23 15:00:34

try:
    import sys, os, re, time

    # 先检测expansion秘钥
    with open(__file__, 'r', encoding='utf-8', errors='ignore') as f:
        file_content = f.read()

    if not re.search(r'expansion', file_content):
        print("文件缺少授权秘钥expansion，禁止执行\n文件缺少授权秘钥expansion，禁止执行")
        sys.exit(1)

    # 再检查版权信息是否存在且未被修改
    if 'Powered By：expansion' not in file_content or 'ikuuu注册地址------https://ikuuu.one/auth/register?code=elRt' not in file_content or '推荐代理注册：https://www.ipzan.com?pid=g587ksmm' not in file_content:
        print("文件可能被恶意篡改,请勿修改文件内容\n文件可能被恶意篡改,请勿修改文件内容")
        sys.exit(1)

    # 添加时间戳检测，防止调试
    debug_time = time.time()
    # 执行一些无意义的操作，干扰逆向分析
    _ = [i for i in range(10000) if i % 3 == 0]
    if time.time() - debug_time < 0.0001:  # 调整为更小的值，只有在极快的情况下才触发
        print("检测到可能的调试环境，禁止执行")
        sys.exit(1)
except Exception as e:
    # 出错时也退出，防止绕过检查
    sys.exit(1)
