import numpy as np

import matplotlib.pyplot as plt


def ate(p):
    return np.exp(-p)


def ate2(p):
    y = (1-p/(1+4))
    return y*(y > 0)


def ate3(p):
    y = (1-p**2/(1+4)**2)
    return y*(y > 0)


x = np.linspace(-5, 5, 50)
y = np.linspace(-5, 5, 50)
xx, yy = np.meshgrid(x, y)
x = xx.flatten()
y = yy.flatten()
p = (x**2+y**2)**0.5
z = ate(p)
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
