import cv2
import uuid

@pytalk_method('blur')
def cv2blur(path):
    img = cv2.blur(cv2.imread(path),(20,20))
    dst = str(uuid.uuid1()) + '.jpg'
    cv2.imwrite(dst, img)
    return dst