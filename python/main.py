import numpy as np

import matplotlib.pyplot as plt


def ate(p):
    return np.exp(-p)


def atei(x): return -np.log(x)


def ate2(p):
    y = (1-p/(1+4))
    return y*(y > 0)


def ate3(p):
    y = (1-p**2/(1+4)**2)
    return y*(y > 0)


maxr = 5
n = 5
x1 = atei(np.linspace(ate(0), ate(maxr), n)).tolist()
x2 = (-atei(np.linspace(ate(maxr), ate(0), n))).tolist()

_x = np.array(x2+x1[1:])
xx, yy = np.meshgrid(_x, _x)
x = xx.flatten()
y = yy.flatten()
p = (x**2+y**2)**0.5
z = ate(p)
print(len(z))
np.savetxt('./resources/atenuacion_1.csv',
           [x, y, z], delimiter=',', fmt='%.4f')
plt.figure().add_subplot(projection='3d').plot_trisurf(x, y, z, cmap='rainbow')
plt.show()

z = ate2(p)
np.savetxt('./resources/atenuacion_2.csv',
           [x, y, z], delimiter=',', fmt='%.4f')
plt.figure().add_subplot(projection='3d').plot_trisurf(x, y, z, cmap='rainbow')
plt.show()

z = ate3(p)
np.savetxt('./resources/atenuacion_3.csv',
           [x, y, z], delimiter=',', fmt='%.4f')
plt.figure().add_subplot(projection='3d').plot_trisurf(x, y, z, cmap='rainbow')
plt.show()
