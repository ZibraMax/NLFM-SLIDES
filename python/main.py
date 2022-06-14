import numpy as np

import matplotlib.pyplot as plt


def ate(p):
    return np.exp(-p)


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
