import os

def list_images(folder_path):
    images = []
    for filename in os.listdir(folder_path):
        if filename.endswith(".jpg"):
            parts = filename.split('_', 1)
            location_id = parts[0]
            landmark_name = parts[1].rsplit('.', 1)[0]  # 移除.jpg
            images.append({
                "location_id": location_id,
                "landmark_name": landmark_name.replace('%20', ' '),  # 如果需要，替换特殊字符
                "filename": filename
            })
    return images

# 调用函数并打印结果
folder_path = 'imageData/landmarks'  # 确保这是正确的路径
images = list_images(folder_path)
print(images)

# 将图片信息转换为JavaScript数组
js_array = "const images = [\n"
for img in images:
    js_array += f"  {{ location_id: '{img['location_id']}', landmark_name: `{img['landmark_name']}`, filename: `imageData/landmarks/{img['filename']}` }},\n"
js_array += "];"

print(js_array)
