import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

nx = 9
ny = 9

hx = 0.5
hy = 0.5

x0 = 4*hx
x1 = (5)*hx

y0 = 4*hy
y1 = (5)*hy
center = np.array([x0 + (x1-x0)/2, y0 + (y1-y0)/2])

lr = 3.2*hx

circle = mpatches.Circle(center, lr, fc="none", ec='#dc2c41', linewidth=3)


for i in range(nx):
    for j in range(ny):
        x0 = i*hx
        x1 = (i+1)*hx

        y0 = j*hy
        y1 = (j+1)*hy

        rectx = [x0, x1, x1, x0, x0]
        recty = [y0, y0, y1, y1, y0]
        centeri = np.array([x0 + (x1-x0)/2, y0 + (y1-y0)/2])
        if np.linalg.norm(centeri-center) < lr:
            plt.fill(rectx, recty, c='#dcdcdc')
            if i == 4 and j == 4:
                plt.fill(rectx, recty, c='#dc2c41')

        plt.plot(rectx, recty, c='k')
        plt.plot(x0 + (x1-x0)/2, y0 + (y1-y0)/2, 'o', c='#5c5c5c')
t = 0.5
plt.annotate('',
             [center[0] + lr*np.cos(t), center[1] + lr*np.sin(t)],
             xycoords="data",
             textcoords="data",
             xytext=(center[0], center[1]),
             va="center",
             ha="left",
             c='#8f1625',
             size=20,
             arrowprops=dict(arrowstyle="simple",
                             connectionstyle="arc3",
                             ec='#8f1625',
                             fc='#dc2c41'),
             )
plt.annotate('Lr',
             [center[0] + 0.5*lr*np.cos(t), center[1] + 0.5*lr*np.sin(t)],
             textcoords="offset points",
             xytext=(-20, 20),
             va="center",
             ha="left",
             c='#dc2c41',
             fontsize=20)
plt.gca().set_aspect('equal')
plt.gca().add_artist(circle)
plt.axis('off')
plt.tight_layout()
plt.savefig("./resources/deteccion_no_local.png", bbox_inches='tight')
plt.show()
