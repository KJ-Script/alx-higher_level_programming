#!/usr/bin/python3
"""Square with size

Practicing private attributes within a class

"""


class Square:
    """Square with size attribute
    """
    def __init__(self, size):
        """ _size is initialized with size
        Args:
            size (int): size of the side of the square.
        Attributes:
            size (int): the size of the square of this class set
            by the initializer.
        """
        self.__size = size
